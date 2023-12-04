FROM node:16

WORKDIR /subletr

COPY . /subletr/

RUN npm install; cd subletr-reactapp; npm i --force; npm run build;



ENV WEBSERVER_PORT=80

EXPOSE ${WEBSERVER_PORT}
