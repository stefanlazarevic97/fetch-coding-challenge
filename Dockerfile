# Use an official Node.js runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]

# Expose port 8080 to bind to the host machine
EXPOSE 8080