FROM node:latest

WORKDIR /app

EXPOSE 3333

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]