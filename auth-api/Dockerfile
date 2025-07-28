FROM node@sha256:7671819c5461e04ada006f5024cc361becdfacd7af58676bcb7c59ca2b491249

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "auth-app.js" ]
