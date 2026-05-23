# Server Deployment Checklist

## 1. Clone project

git clone https://github.com/Do-Davin/coffee-backend.git
cd coffee-backend

## 2. Create production env

cp .env.prod.example .env.prod
nano .env.prod

Important: replace the example password before starting production containers.

## 3. Start production containers

docker compose --env-file .env.prod -f docker-compose.prod.yml up -d --build

## 4. Run database migration

docker compose --env-file .env.prod -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy

## 5. Test API

curl http://localhost:3000/coffee

## 6. Check status

docker compose --env-file .env.prod -f docker-compose.prod.yml ps

## 7. Check logs

docker compose --env-file .env.prod -f docker-compose.prod.yml logs backend --tail=50
