# Bank API

## О приложении

REST API системы управления пользователями и операций по осуществлению банковский транзацкий.

## Системные требования

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

### Инфраструктурные сервисы

- PostgreSQL

1. `git clone https://github.com/olegschekotihin/Bank-api.git`
2. `cd Bank-api`
3. `docker-compose up -d`

## Запуск сервера

1. `git clone https://github.com/olegschekotihin/Bank-api.git`
2. `cd Bank-api`
3. `npm i`
4. `npm run start`
5. `Открыть http://localhost:3000/swagger-ui`

## Работа с приложением
1. Регистрация пользователя /authentication/register
2. Авторизация /authentication/log-in
3. Создание аккаунта /accounts
4. Создание транзакции /transactions

## Авторизация
Токен JWT хранится в cookie

## Environment variables

| Name                        | Description                                   | Default value       |
|-----------------------------|-----------------------------------------------|---------------------|
| POSTGRES_HOST               | postgres host                                 | localhost           |
| POSTGRES_PORT               | postgres port                                 | 5432                |
| POSTGRES_USER               | postgres user                                 | admin               |
| POSTGRES_PASSWORD           | postgres password                             | admin               |
| POSTGRES_DB                 | postgres db name                              | nestjs              |
| SWAGGER_PROTOCOL            | swagger ui protocol                           | http                |
| SWAGGER_HOST                | swagger ui host                               | localhost           |
| SWAGGER_PORT                | dictionary microservice port                  | 3000                |
| JWT_SECRET                  | secret key                                    | SECRET              |
| JWT_EXPIRATION_TIME         | token lifetime                                | 600                 |
| ACCEPTED_DOMAIN             | accepted domain                               | https://localhost   |

