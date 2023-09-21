FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN mv .env.example .env
EXPOSE 3003
CMD ["npm", "start"]