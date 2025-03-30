FROM node:18-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install && npm install react-router-dom@6
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html