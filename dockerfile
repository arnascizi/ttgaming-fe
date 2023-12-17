FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY /dist/ttgaming-fe/ /usr/share/nginx/html
