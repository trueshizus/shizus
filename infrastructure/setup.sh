#!/bin/bash
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Shizus Website - Google Cloud Setup Script${NC}"
echo "This script will help you set up your Google Cloud project and deploy your application."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
    echo "Please install the Google Cloud SDK from https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if terraform is installed
if ! command -v terraform &> /dev/null; then
    echo -e "${RED}Error: Terraform is not installed.${NC}"
    echo "Please install Terraform from https://developer.hashicorp.com/terraform/install"
    exit 1
fi

# Check if user is logged in to gcloud
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo -e "${YELLOW}You need to log in to Google Cloud.${NC}"
    gcloud auth login
fi

# Re-authenticate with application default credentials
echo -e "${YELLOW}Setting up application default credentials...${NC}"
gcloud auth application-default login

# Get project ID
read -p "Enter your Google Cloud project ID (must already exist): " PROJECT_ID

# Check if project exists
if ! gcloud projects describe "$PROJECT_ID" &> /dev/null; then
    echo -e "${RED}Error: Project $PROJECT_ID does not exist.${NC}"
    echo "Please create the project manually in the Google Cloud Console:"
    echo "https://console.cloud.google.com/projectcreate"
    exit 1
fi

# Verify billing is enabled
echo -e "${YELLOW}Checking if billing is enabled for project $PROJECT_ID...${NC}"
if ! gcloud billing projects describe "$PROJECT_ID" &> /dev/null; then
    echo -e "${RED}Error: Billing is not enabled for project $PROJECT_ID.${NC}"
    echo "Please enable billing in the Google Cloud Console:"
    echo "https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
    exit 1
fi

echo -e "${GREEN}Billing is enabled for project $PROJECT_ID.${NC}"

# Set up region
read -p "Enter the region to deploy to [us-central1]: " REGION
REGION=${REGION:-us-central1}

# Get GitHub repository information
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your GitHub repository name: " GITHUB_REPO

# Enable required APIs
echo -e "${YELLOW}Enabling required APIs...${NC}"
gcloud services enable cloudresourcemanager.googleapis.com \
    cloudbuild.googleapis.com \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    iam.googleapis.com \
    iamcredentials.googleapis.com \
    sts.googleapis.com \
    --project="$PROJECT_ID"

# Create terraform.tfvars file
mkdir -p "$(dirname "$0")/terraform"
cd "$(dirname "$0")/terraform"
echo "Creating terraform.tfvars file..."

cat > terraform.tfvars << EOF
project_id         = "${PROJECT_ID}"
project_name       = "Shizus Website"
create_project     = false
region             = "${REGION}"
zone               = "${REGION}-a"
initial_image      = "gcr.io/cloudrun/hello"
EOF

echo -e "${GREEN}terraform.tfvars file created.${NC}"

# Initialize Terraform
echo "Initializing Terraform..."
terraform init

# Apply Terraform configuration
echo -e "${YELLOW}Ready to apply Terraform configuration.${NC}"
read -p "Do you want to continue? (y/n): " CONTINUE

if [[ $CONTINUE == "y" || $CONTINUE == "Y" ]]; then
    terraform apply
    
    echo -e "${GREEN}Terraform applied successfully!${NC}"
    
    # Create service account for GitHub Actions
    echo -e "${YELLOW}Creating service account for GitHub Actions...${NC}"
    
    SA_NAME="github-actions"
    SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
    
    # Check if service account exists
    if gcloud iam service-accounts describe "$SA_EMAIL" --project="$PROJECT_ID" &> /dev/null; then
        echo -e "${GREEN}Service account $SA_EMAIL already exists.${NC}"
    else
        echo -e "${YELLOW}Creating service account $SA_EMAIL...${NC}"
        gcloud iam service-accounts create "$SA_NAME" \
            --display-name="GitHub Actions" \
            --project="$PROJECT_ID"
        
        # Wait a moment for the service account to be fully created
        sleep 5
    fi
    
    # Grant necessary roles
    echo -e "${YELLOW}Granting necessary roles to service account...${NC}"
    
    # Grant Cloud Run Admin role
    gcloud projects add-iam-policy-binding "$PROJECT_ID" \
        --member="serviceAccount:${SA_EMAIL}" \
        --role="roles/run.admin"
    
    # Grant Artifact Registry Admin role
    gcloud projects add-iam-policy-binding "$PROJECT_ID" \
        --member="serviceAccount:${SA_EMAIL}" \
        --role="roles/artifactregistry.admin"
    
    # Grant Service Account User role
    gcloud projects add-iam-policy-binding "$PROJECT_ID" \
        --member="serviceAccount:${SA_EMAIL}" \
        --role="roles/iam.serviceAccountUser"
    
    # Set up Workload Identity Federation
    echo -e "${YELLOW}Setting up Workload Identity Federation for GitHub Actions...${NC}"
    
    # Create a unique Workload Identity Pool ID with timestamp
    TIMESTAMP=$(date +%s)
    POOL_ID="github-pool-${TIMESTAMP}"
    POOL_DISPLAY_NAME="GitHub Actions Pool"
    
    # Create the Workload Identity Pool
    echo -e "${YELLOW}Creating Workload Identity Pool: $POOL_ID${NC}"
    gcloud iam workload-identity-pools create "$POOL_ID" \
        --project="$PROJECT_ID" \
        --location="global" \
        --display-name="$POOL_DISPLAY_NAME"
    
    # Get the Workload Identity Pool ID
    WORKLOAD_IDENTITY_POOL_ID=$(gcloud iam workload-identity-pools describe "$POOL_ID" \
        --project="$PROJECT_ID" \
        --location="global" \
        --format="value(name)")
    
    echo -e "${GREEN}Created Workload Identity Pool: $WORKLOAD_IDENTITY_POOL_ID${NC}"
    
    # Create a Workload Identity Provider
    PROVIDER_ID="github-provider"
    PROVIDER_DISPLAY_NAME="GitHub Actions Provider"
    
    # Create the Workload Identity Provider with simplified attribute mapping
    echo -e "${YELLOW}Creating Workload Identity Provider: $PROVIDER_ID${NC}"
    gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_ID" \
        --project="$PROJECT_ID" \
        --location="global" \
        --workload-identity-pool="$POOL_ID" \
        --display-name="$PROVIDER_DISPLAY_NAME" \
        --attribute-mapping="google.subject=assertion.sub" \
        --issuer-uri="https://token.actions.githubusercontent.com"
    
    # Allow authentication from the GitHub repository to the service account
    REPO_PATH="${GITHUB_USERNAME}/${GITHUB_REPO}"
    
    echo -e "${YELLOW}Binding service account to GitHub repository: $REPO_PATH${NC}"
    gcloud iam service-accounts add-iam-policy-binding "$SA_EMAIL" \
        --project="$PROJECT_ID" \
        --role="roles/iam.workloadIdentityUser" \
        --member="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/subject/repo:${GITHUB_USERNAME}/*"
    
    # Get the Workload Identity Provider resource name
    WORKLOAD_IDENTITY_PROVIDER=$(gcloud iam workload-identity-pools providers describe "$PROVIDER_ID" \
        --project="$PROJECT_ID" \
        --location="global" \
        --workload-identity-pool="$POOL_ID" \
        --format="value(name)")
    
    echo -e "${GREEN}Workload Identity Federation set up successfully!${NC}"
    echo -e "${YELLOW}Add the following secrets to your GitHub repository:${NC}"
    echo -e "GCP_PROJECT_ID: ${PROJECT_ID}"
    echo -e "GCP_WORKLOAD_IDENTITY_PROVIDER: ${WORKLOAD_IDENTITY_PROVIDER}"
    echo -e "GCP_SERVICE_ACCOUNT: ${SA_EMAIL}"
    
    echo -e "${GREEN}Setup complete! Your infrastructure is ready.${NC}"
else
    echo "Terraform apply cancelled."
fi 