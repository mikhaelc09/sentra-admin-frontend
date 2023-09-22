FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3003
CMD ["npm", "start"]