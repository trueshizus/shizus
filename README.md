# shizus.dev

## Overview

This is my personal website, where I share my projects and thoughts.

## Getting Started

1. Clone the repository

```bash
gh repo clone trueshizus/shizus
```

2. Install dependencies

```bash
cd shizus
yarn install
```

3. Run the development server

```bash
yarn dev
```

## Stack

- Next.js
- TailwindCSS
- TypeScript
- MDX
- Google Cloud Platform

## Deployment

This project is set up to be deployed to Google Cloud Platform using Terraform and GitHub Actions with Workload Identity Federation.

### Prerequisites

- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Terraform](https://developer.hashicorp.com/terraform/install)
- A Google Cloud account with billing enabled

### Initial Setup

1. **Create a Google Cloud Project manually**:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/projectcreate)
   - Create a new project with your desired name
   - Enable billing for the project
   - Note the project ID for use in the next step

2. Run the setup script:

```bash
./infrastructure/setup.sh
```

This script will:

- Verify your Google Cloud project exists and has billing enabled
- Set up the necessary infrastructure using Terraform
- Create a service account for GitHub Actions
- Configure Workload Identity Federation for secure authentication

3. Add the following secrets to your GitHub repository:
   - `GCP_PROJECT_ID`: Your Google Cloud project ID
   - `GCP_WORKLOAD_IDENTITY_PROVIDER`: The Workload Identity Provider resource name
   - `GCP_SERVICE_ACCOUNT`: The service account email

### Continuous Deployment

Once set up, the application will automatically deploy to Google Cloud Run whenever changes are pushed to the main branch.

You can also manually trigger a deployment from the GitHub Actions tab.

### Local Deployment Testing

To build and test the Docker image locally:

```bash
# Build the Docker image
docker build -t shizus-app .

# Run the container locally
docker run -p 3000:3000 shizus-app
```

Then visit http://localhost:3000 in your browser.
