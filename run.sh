#!/bin/bash

# Install dependencies
npm install

# Build the application
npm run build

# Run the server
npm start $1

# Open the browser
xdg-open http://localhost:3000