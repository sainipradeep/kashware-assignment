FROM node:14

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./ ./
# start app
CMD ["sh","-c","npm install && npm start"]
