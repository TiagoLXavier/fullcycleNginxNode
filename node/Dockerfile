FROM node:16.15-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY ./server.js ./
COPY ./views ./views
COPY ./models ./models

RUN npm ci

EXPOSE 3000
CMD [ "node","server.js" ]