FROM mhart/alpine-node

# Create app directory
WORKDIR /usr/src/app
COPY . .

RUN yarn && yarn build

EXPOSE 9000
CMD [ "node", "server.js" ]
