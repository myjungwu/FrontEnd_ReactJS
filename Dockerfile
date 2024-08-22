FROM node:20

# Define build arguments for environment variables
ARG VITE_APIURL
ARG VITE_MODE

# Set environment variables during the build process
ENV VITE_APIURL=$VITE_APIURL
ENV VITE_MODE=$VITE_MODE

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]