locals {
  env            = "dev"
  target_service = "AKTKT"
  default_tags = {
    Target      = local.target_service
    Environment = local.env
    ManagedBy   = "Terraform"
  }
}

module "static_web_site" {
  source = "../../../services/static_web_site"

  environment    = local.env
  target_service = local.target_service

  root_domain = "aktkt.net"
  domain_name = "aktkt.net"
}

