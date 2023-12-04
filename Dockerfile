FROM node:16

WORKDIR /subletr

COPY . /subletr/

RUN npm install; cd subletr-reactapp; npm i --force; npm run build; cd backend; npm i --force; node ./index.js;


ENV WEBSERVER_PORT=80

EXPOSE ${WEBSERVER_PORT}
