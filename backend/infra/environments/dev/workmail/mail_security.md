# mail_security

words: forge => 偽造

## DKIM

- Signature attached on Mail Header for email's domain name and message.


```
DKIM (DomainKeys Identified Mail) is an email authentication method designed to help protect both email senders and recipients from forged and phishing emails. It allows an organization to take responsibility for a message that is in transit. DKIM works by attaching a digital signature, linked to a domain name, to each outgoing email message. This signature is stored in the email’s header.

The receiving email server uses this signature to perform a validation check by looking up the sender’s public DKIM key published in the DNS. If the key validates the signature, it proves that the email was not altered after it was sent and that it indeed comes from the specified domain, thereby helping to prevent email spoofing and ensuring the integrity of the email content.
```

## SPF

- Verifing sender's email address by chedking SPF records TXT in sender's DNS.

```
SPF (Sender Policy Framework) is an email authentication method designed to detect forging sender addresses during the delivery of the email. SPF allows the owner of a domain to specify which mail servers they authorize to send email on behalf of their domain. This is done by adding SPF records to the Domain Name System (DNS) of the domain.

An SPF record is a TXT record that lists the authorized sending IP addresses for a domain. When an email is received, the receiving mail server checks the SPF record of the sender's domain to verify that the email comes from an authorized mail server. If the email passes the SPF check, it's considered to be from a legitimate source. If it fails, the email can be marked as spam or rejected.

SPF helps to prevent email spoofing and phishing by making it harder for attackers to send emails that appear to be from a domain they do not own.
```

## DMARC

fraudulent : 詐欺的な
legitimate : 正当な


- DMARC is build on the SPF and DKIM protocols to improve and monitor the protection of the domain.
- This allows a domain owner to publish a policy which gives the email receiver an instruct to take specific astions. 

```
DMARC (Domain-based Message Authentication, Reporting, and Conformance) is an email authentication, policy, and reporting protocol. It builds on the SPF (Sender Policy Framework) and DKIM (DomainKeys Identified Mail) protocols to improve and monitor the protection of the domain from fraudulent email, such as phishing and spoofing.

DMARC allows a domain owner to publish a policy in their DNS records that defines how an email receiver should handle mail that doesn’t pass SPF or DKIM authentication checks. The policy can instruct the receiving mail server to take specific actions such as rejecting the message or marking it as spam. Additionally, DMARC specifies how an email receiver can report back to the sender about messages that pass and/or fail DMARC evaluation.

DMARC helps to ensure that legitimate emails are properly authenticated against established SPF and DKIM standards, reducing the chance of a spammer or phisher successfully masquerading as a trusted sender.
```

