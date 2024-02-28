FROM node:16-alpine3.18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY ./server.js ./
COPY ./views ./views
COPY ./models ./models
RUN npm ci

EXPOSE 3000

CMD [ "node","server.js" ]