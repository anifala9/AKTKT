locals {
  env            = "dev"
  target_service = "AKTKT"
  domain_name = "aktkt.net"
  default_tags = {
    Target      = local.target_service
    Environment = local.env
    ManagedBy   = "Terraform"
  }
}

module "route53-workmail-records" {
  source  = "ksatirli/route53-workmail-records/aws"
  version = "2.1.0"
  # insert the 1 required variable here
  zone_id = "Z07068371EVLGVB0WK0LP" # ToDO Import from instance
}



