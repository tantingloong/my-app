# build environment

# pull official base image
FROM node:current-alpine3.10 as build

# set working directory
WORKDIR ~/home/pi/my-app

# add `/app/node_modules/.bin` to $PATH
ENV PATH ~/home/pi/my-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.4 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]