FROM node:14-alpine as build

WORKDIR /app
ARG NODE_ENV=staging
ENV NODE_ENV $NODE_ENV
COPY package.json ./
COPY package-lock.json ./
RUN npm ci && npm cache clean --force
COPY ./ /app/
RUN npm run build
FROM nginx:1.20-alpine
#Remove the current files and copy build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build/ /usr/share/nginx/html
#Copy the nginx config file

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 3000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]