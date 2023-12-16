# Use an official Node.js runtime as a base image
FROM node:14

# Copy package.json and package-lock.json to the working directory
COPY /server/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY /server .

# Expose the port that your app will run on
EXPOSE 3001

# Define the command to run your application
CMD ["node", "index.js"]
