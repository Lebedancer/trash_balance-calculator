FROM sickp/alpine-node:6.14
WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 8080

