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
  description = "Whether to create a new project or use an existing one"
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
  description = "The initial image to deploy to Cloud Run"
  type        = string
  default     = "gcr.io/cloudrun/hello"
}

variable "openai_api_key" {
  description = "OpenAI API Key"
  type        = string
  sensitive   = true
}

variable "google_ai_api_key" {
  description = "Google Generative AI API Key"
  type        = string
  sensitive   = true
}

variable "deepseek_api_key" {
  description = "Deepseek API Key"
  type        = string
  sensitive   = true
}

variable "digital_ocean_api_key" {
  description = "Digital Ocean API Key"
  type        = string
  sensitive   = true
} 