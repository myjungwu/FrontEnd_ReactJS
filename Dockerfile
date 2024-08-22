FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

# Define build arguments for environment variables
ARG VITE_APIURL
ARG VITE_MODE

# Set environment variables during the build process
ENV VITE_APIURL=.env.$VITE_APIURL
ENV VITE_MODE=.env.$VITE_MODE

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]