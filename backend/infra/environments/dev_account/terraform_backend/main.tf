locals {
  env            = "dev"
  target_service = "AKTKT"
  default_tags = {
    Target      = local.target_service
    Environment = local.env
    ManagedBy   = "Terraform"
  }
}

provider "aws" {
  region = "ap-northeast-3"
  # 全てのリソースに付与するタグ
  default_tags {
    tags = local.default_tags
  }
}

module "terraform_backend" {
  source = "../../../modules/terraform-backend"

  environment    = local.env
  target_service = local.target_service

  force_destroy = false
}