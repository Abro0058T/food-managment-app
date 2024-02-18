FROM node


WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm install --force

CMD ["npm","run","dev"]
