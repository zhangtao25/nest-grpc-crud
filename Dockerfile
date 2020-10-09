FROM node:alpine
MAINTAINER zhangwenrou

RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
#指定工作目录
WORKDIR /usr/src/app

# Bundle app source
RUN node -v
RUN npm install -g cnpm --registry=http://registry.npm.taobao.org
RUN cnpm install
RUN npm run build

EXPOSE 3003
EXPOSE 8888
CMD [ "node", "dist/main.js" ]