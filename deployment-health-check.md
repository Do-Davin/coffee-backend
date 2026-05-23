# Coffee Backend Server Health Check

## Public API

```bash
curl http://134.209.97.173/coffee
```

Expected: coffee JSON response.

## Local Backend
```bash
curl http://localhost:3000/coffee
```

Expected: coffee JSON response.

## Docker Containers

```bash
docker ps
```

Expected:

* coffee_backend_prod is Up
* coffee_postgres_prod is Up and healthy
* backend port is 127.0.0.1:3000->3000/tcp

## Firewall

```bash
sudo ufw status numbered
```

Expected:

* OpenSSH allowed
* Nginx HTTP allowed
* No public 3000/tcp