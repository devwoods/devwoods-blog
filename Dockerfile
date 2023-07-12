FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY .yarnrc.yml ./
COPY .yarn .yarn

COPY . .

RUN yarn build

CMD ["node", "-r", "./.pnp.cjs", "server.js"]


