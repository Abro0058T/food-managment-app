FROM node:20.11.1


WORKDIR /app

COPY package.json ./


RUN npm install --force

COPY . .
CMD ["nodemon","server.js"]
