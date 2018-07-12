FROM node:8.11-alpine
WORKDIR /app
EXPOSE 3000
ADD package*.json /app/
RUN npm install
CMD ["npm", "start"]