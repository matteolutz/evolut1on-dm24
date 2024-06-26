#!/bin/bash

# Update
sudo apt-get update

# Install Node.js
sudo apt-get install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg

NODE_MAJOR=20
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt-get update

sudo apt install nodejs build-essential -y

# Install dependencies
npm install

# Build the application
npm run build

# Run the server
npm start $1

# Open the browser
xdg-open http://localhost:3000