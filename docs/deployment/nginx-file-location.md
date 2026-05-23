# Nginx File Location

## Main Nginx config folder

/etc/nginx

## Available site configs

/etc/nginx/sites-available

## Enabled site configs

/etc/nginx/sites-enabled

## Common backend config path

/etc/nginx/sites-available/coffee-backend

## Enable site config

sudo ln -s /etc/nginx/sites-available/coffee-backend /etc/nginx/sites-enabled/

## Test config

sudo nginx -t

## Restart Nginx

sudo systemctl restart nginx
