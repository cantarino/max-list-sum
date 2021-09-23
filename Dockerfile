FROM node:16.9.1

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "serve" ]