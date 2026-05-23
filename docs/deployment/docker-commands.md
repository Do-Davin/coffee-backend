# Docker Commands

## Run development

docker compose -f docker-compose.dev.yml up -d postgres
npm run start:dev

## Stop development

docker compose -f docker-compose.dev.yml down

## Run production

docker compose --env-file .env.prod -f docker-compose.prod.yml up -d --build
docker compose --env-file .env.prod -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy

## Stop production

docker compose --env-file .env.prod -f docker-compose.prod.yml down

## Check production status

docker compose --env-file .env.prod -f docker-compose.prod.yml ps

## Check production logs

docker compose --env-file .env.prod -f docker-compose.prod.yml logs backend --tail=50
