FROM node:lts-alpine

WORKDIR /usr/app/src

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]