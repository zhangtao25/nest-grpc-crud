FROM node:alpine
MAINTAINER zhangtao25

RUN mkdir -p /usr/src/app
COPY . /usr/src/app/

WORKDIR /usr/src/app

# Bundle app source
RUN node -v
RUN npm install -g cnpm --registry=http://registry.npm.taobao.org
RUN cnpm install
RUN npm run build

EXPOSE 3030
EXPOSE 8888
CMD [ "node", "dist/main.js" ]
