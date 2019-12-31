FROM node:10.18.0-alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install --production
EXPOSE 80
CMD ["npm", "run", "start-docker"]