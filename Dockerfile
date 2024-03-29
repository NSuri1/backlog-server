FROM node:11-slim
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "serve"]
