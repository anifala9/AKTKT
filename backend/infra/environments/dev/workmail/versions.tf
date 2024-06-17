terraform {
  required_version = "~> 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.15"
    }
  }

  backend "s3" {
    bucket         = "aktkt-dev-terraform-backend"
    key            = "workmail"
    encrypt        = true
    dynamodb_table = "aktkt-dev-terraform-tfstate-lock"
    region         = "ap-northeast-3"
  }
}