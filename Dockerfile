FROM node:alpine
WORKDIR /app
RUN npm install
COPY . .
COPY .npmrc ./
COPY package.json ./
CMD npm start

