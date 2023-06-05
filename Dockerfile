FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY .npmrc ./
RUN npm install -f
COPY . .
EXPOSE 8181
CMD npm start

