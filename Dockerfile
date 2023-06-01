FROM node:alpine
WORKDIR /app
RUN apk add --no-cache python3 py3-pip make g++
RUN npm install
COPY . .
CMD npm start

FROM node:16.13-alpine3.15
RUN apk --no-cache add --virtual .builds-deps build-base python3
WORKDIR /app
COPY . .
COPY package.json ./
CMD ["npm", "start"]