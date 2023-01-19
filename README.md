# Bank API

## Требования к приложению

- Node.js 14+ (https://nodejs.org/)
- Yarn 1.22.5+ (https://classic.yarnpkg.com/)
- Docker 19+ (https://www.docker.com/)
- Docker Compose (https://docs.docker.com/compose/)
- PostgreSQL 14 (https://www.postgresql.org/)

## Установка

### Node.js

- Linux: https://nodejs.org/en/download/package-manager/
- Windows: https://nodejs.org/en/download/

### Yarn

https://classic.yarnpkg.com/en/docs/install

### Docker

https://docs.docker.com/engine/install/

### Docker Compose

https://docs.docker.com/compose/install/

### Инфраструктурные услуги

- PostgreSQL

1. `git clone https://github.com/olegschekotihin/Bank-api.git`
1. `docker-compose up -d`

## Запуск сервера

1. `git clone https://github.com/olegschekotihin/Bank-api.git`
1. `npm i`
1. `npm run start`
1.  Открыть http://localhost:3000/swagger-ui

## Environment variables

### api-gateway

| Name                        | Description                                   | Default value                                                             |
|-----------------------------|-----------------------------------------------|---------------------------------------------------------------------------|
| POSTGRES_HOST               | postgres host                                 | localhost                                                                 |
| POSTGRES_PORT               | postgres port                                 | 5432                                                                      |
| POSTGRES_USER               | postgres user                                 | admin                                                                     |
| POSTGRES_PASSWORD           | postgres password                             | admin                                                                     |
| POSTGRES_DB                 | postgres db name                              | nestjs                                                                    |
| PORT                        |                                               | 5000                                                                      |
| SWAGGER_PROTOCOL            | swagger ui protocol                           | http                                                                      |
| SWAGGER_HOST                | swagger ui host                               | localhost                                                                 |
| SWAGGER_PORT                | dictionary microservice port                  | 3000                                                                      |
| TRANSACTION_ATTEMPTS_COUNT  | transaction attempts count                    | 5                                                                         |
| JWT_SECRET                  | secret key                                    | SECRET                                                                    |
| JWT_EXPIRATION_TIME         | token lifetime                                | 300                                                                       |

