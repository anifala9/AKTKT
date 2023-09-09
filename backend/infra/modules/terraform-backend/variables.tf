variable "environment" {
  type = string
}

variable "target_service" {
  type = string
}

variable "force_destroy" {
  type    = bool
  default = false
}