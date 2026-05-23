# Coffee Backend Deployment Quick Reference

Project: `coffee-backend`  
Purpose: Ubuntu/DigitalOcean backend deployment practice

---

## 1. SSH

```bash
ls ~/.ssh
ssh -T git@github.com
ssh root@YOUR_SERVER_IP
ssh coffee-server
```

**Safety note:** never share your private key.

```txt
Private key: ~/.ssh/id_ed25519
Public key:  ~/.ssh/id_ed25519.pub
```

---

## 2. Ubuntu Package Basics

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install package-name -y
```

Example:

```bash
sudo apt install git -y
```

---

## 3. Git Setup

```bash
sudo apt install git -y
git --version
git clone https://github.com/Do-Davin/coffee-backend.git
cd coffee-backend
```

---

## 4. Docker Setup

```bash
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
docker --version
docker compose version
```

---

## 5. Firewall

```bash
sudo ufw status
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo ufw status
```

Only expose:

```txt
22  = SSH
80  = HTTP
443 = HTTPS
```

Do **not** expose PostgreSQL or Redis to the internet.

---

## 6. Nginx Setup

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl status nginx
sudo nginx -t
sudo systemctl restart nginx
```

Important Nginx paths:

```txt
/etc/nginx
/etc/nginx/sites-available
/etc/nginx/sites-enabled
/etc/nginx/sites-available/coffee-backend
```

Enable site config:

```bash
sudo ln -s /etc/nginx/sites-available/coffee-backend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 7. Nginx Reverse Proxy Example

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_SERVER_IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Idea:

```txt
Public request → Nginx port 80 → Backend localhost:3000
```

---

## 8. First Production Deployment

```bash
git clone https://github.com/Do-Davin/coffee-backend.git
cd coffee-backend
cp .env.prod.example .env.prod
nano .env.prod
```

Important: replace the example password before starting production containers.

Start containers:

```bash
docker compose --env-file .env.prod -f docker-compose.prod.yml up -d --build
```

Run migration:

```bash
docker compose --env-file .env.prod -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy
```

Test API:

```bash
curl http://localhost:3000/coffee
```

Expected first result:

```json
[]
```

Check status:

```bash
docker compose --env-file .env.prod -f docker-compose.prod.yml ps
```

Check logs:

```bash
docker compose --env-file .env.prod -f docker-compose.prod.yml logs backend --tail=50
```

---

## 9. Server Update Workflow

Use this after code changes are pushed to GitHub.

```bash
cd coffee-backend
git pull
docker compose --env-file .env.prod -f docker-compose.prod.yml up -d --build
docker compose --env-file .env.prod -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy
docker compose --env-file .env.prod -f docker-compose.prod.yml ps
docker compose --env-file .env.prod -f docker-compose.prod.yml logs backend --tail=50
curl http://localhost:3000/coffee
```

---

## 10. Stop Production

```bash
docker compose --env-file .env.prod -f docker-compose.prod.yml down
```

---

## 11. Important Safety Notes

- Do not commit `.env.prod`.
- Do not expose PostgreSQL to the internet.
- Do not expose Redis to the internet.
- Use SSH key login.
- Check logs after every deployment.
- Run migration after pulling new code.
- Backup database before important migrations.
