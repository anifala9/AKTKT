locals {
  origin_id = "${var.target_service}${var.environment}_${var.domain_name}"
}

resource "aws_cloudfront_distribution" "this" {
  aliases = [var.domain_name]

  default_root_object = "index.html"
  is_ipv6_enabled     = true
  http_version        = "http2"

  price_class = "PriceClass_200"

  enabled = true

  origin {
    domain_name              = aws_s3_bucket.origin.bucket_regional_domain_name
    origin_id                = local.origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
  }

  logging_config {
    bucket = aws_s3_bucket.logging.bucket_regional_domain_name
    prefix = "cloudfront/"
  }

  default_cache_behavior {
    target_origin_id = local.origin_id

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    viewer_protocol_policy = "redirect-to-https"

    compress = true

    cache_policy_id = data.aws_cloudfront_cache_policy.managed_caching_optimized.id

    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
  }
  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    "Name" = "${var.target_service}${var.environment}CloudFrontForStaticWebSite"
  }
}

resource "aws_cloudfront_origin_access_control" "main" {
  name                              = join("-", [lower(var.target_service), lower(var.environment), "OAC"])
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_response_headers_policy" "security" {
  name = "${var.target_service}${var.environment}SecurityHeaderPolicy"

  security_headers_config {
    # X-Content-Type-Options: nosniff
    content_type_options {
      override = true
    }

    # X-Frame-Options: DENY
    frame_options {
      override     = true
      frame_option = "DENY"
    }

    referrer_policy {
      override        = true
      referrer_policy = "strict-origin-when-cross-origin"
    }

    strict_transport_security {
      override                   = true
      access_control_max_age_sec = 31536000 # 1 year
      include_subdomains         = true
      preload                    = true
    }

    xss_protection {
      override   = true
      mode_block = true
      protection = true
    }
  }
}
