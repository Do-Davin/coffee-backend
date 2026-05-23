# Firewall Commands

## Check firewall status

sudo ufw status

## Allow SSH

sudo ufw allow OpenSSH

## Allow HTTP

sudo ufw allow 80

## Allow HTTPS

sudo ufw allow 443

## Enable firewall

sudo ufw enable

## Check status again

sudo ufw status

## Important rule

Only expose public ports:

- 22 for SSH
- 80 for HTTP
- 443 for HTTPS

Do not expose PostgreSQL or Redis to the internet.
