provider "aws" {
  alias  = "provider_for_acm"
  region = "us-east-1"

  default_tags {
    tags = {
      Target      = var.target_service
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}


# ACM
module "acm" {
  source = "../../modules/acm"
  providers = {
    aws = aws.provider_for_acm
  }
  root_domain = var.root_domain
  domain_name = var.domain_name

}

# CloudFront distribution & S3 buckets
module "cloudfront" {
  source              = "../../modules/cloudfront_for_static_web_site"
  target_service      = var.target_service
  domain_name         = var.domain_name
  environment         = var.environment
  acm_certificate_arn = module.acm.arn
}

# Route53 Alias Record 
## alias to a CloudFront distribution
data "aws_route53_zone" "this" {
  name = "${var.root_domain}."
}

resource "aws_route53_record" "alias_record" {
  zone_id = data.aws_route53_zone.this.id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = module.cloudfront.domain_name
    evaluate_target_health = false

    zone_id = "Z2FDTNDATAQYW2"
  }
}