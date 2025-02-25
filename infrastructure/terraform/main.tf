terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

# Enable required APIs
resource "google_project_service" "services" {
  for_each = toset([
    "cloudresourcemanager.googleapis.com",
    "cloudbuild.googleapis.com",
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "iam.googleapis.com"
  ])
  project = var.project_id
  service = each.key

  disable_dependent_services = true
  # Project is created manually, so no dependency needed
  # depends_on                 = [google_project.project]
}

# Create Artifact Registry repository for Docker images
resource "google_artifact_registry_repository" "repository" {
  provider      = google
  location      = var.region
  repository_id = "${var.project_id}-repo"
  format        = "DOCKER"
  description   = "Docker repository for ${var.project_name}"
  depends_on    = [google_project_service.services]
}

# Create Cloud Run service
resource "google_cloud_run_v2_service" "service" {
  name     = "${var.project_id}-service"
  location = var.region
  
  template {
    containers {
      image = var.initial_image
      
      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
      }
      
      env {
        name  = "NODE_ENV"
        value = "production"
      }
    }
  }

  depends_on = [google_project_service.services]
}

# Make the Cloud Run service publicly accessible
resource "google_cloud_run_service_iam_member" "public" {
  location = google_cloud_run_v2_service.service.location
  service  = google_cloud_run_v2_service.service.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Output the Cloud Run URL
output "service_url" {
  value = google_cloud_run_v2_service.service.uri
} 