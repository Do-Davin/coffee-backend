# Server Update Checklist

## 1. Go to project folder

cd coffee-backend

## 2. Pull latest code

git pull

## 3. Rebuild and restart containers

docker compose --env-file .env.prod -f docker-compose.prod.yml up -d --build

## 4. Run database migrations

docker compose --env-file .env.prod -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy

## 5. Check status

docker compose --env-file .env.prod -f docker-compose.prod.yml ps

## 6. Check backend logs

docker compose --env-file .env.prod -f docker-compose.prod.yml logs backend --tail=50

## 7. Test API

curl http://localhost:3000/coffee
