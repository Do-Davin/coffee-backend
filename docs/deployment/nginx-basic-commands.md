# Nginx Basic Commands

## Install Nginx

sudo apt install nginx -y

## Check Nginx status

sudo systemctl status nginx

## Start Nginx

sudo systemctl start nginx

## Restart Nginx

sudo systemctl restart nginx

## Test Nginx config

sudo nginx -t

## Important idea

Nginx receives public HTTP/HTTPS traffic and forwards it to the backend container.
