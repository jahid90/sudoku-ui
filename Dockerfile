# Build env
FROM node:12-alpine as build

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

# Production env
FROM nginx:alpine

COPY --from=build /usr/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

