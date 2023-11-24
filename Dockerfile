# Stage 1: Build Angular app
FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Serve Angular app using Nginx
FROM nginx:1.19.2-alpine
COPY --from=build-step /app/dist/nissou /usr/share/nginx/html
