FROM node:14-alpine AS builder

WORKDIR /app

COPY ./ ./

RUN yarn install --frozen-lockfile

RUN yarn build

FROM caddy:latest

WORKDIR /app/

COPY --from=builder /app/build /app/www

COPY ./Caddyfile /etc/caddy/Caddyfile

