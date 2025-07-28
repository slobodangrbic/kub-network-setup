FROM sha256:37ff334612f77d8f999c10af8797727b731629c26f2e83caa6af390998bdc49c

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "auth-app.js" ]
