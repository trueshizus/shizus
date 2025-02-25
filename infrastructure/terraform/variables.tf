variable "project_id" {
  description = "The ID of the Google Cloud project"
  type        = string
}

variable "project_name" {
  description = "The name of the Google Cloud project"
  type        = string
  default     = "Shizus Website"
}

variable "create_project" {
  description = "Whether to create a new Google Cloud project"
  type        = bool
  default     = false
}

variable "billing_account_id" {
  description = "The ID of the billing account to associate with the project"
  type        = string
  default     = ""
}

variable "region" {
  description = "The region to deploy resources to"
  type        = string
  default     = "us-central1"
}

variable "zone" {
  description = "The zone to deploy resources to"
  type        = string
  default     = "us-central1-a"
}

variable "initial_image" {
  description = "The initial Docker image to deploy to Cloud Run"
  type        = string
  default     = "gcr.io/cloudrun/hello"
} 