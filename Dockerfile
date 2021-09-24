from node:latest
WORKDIR app
ADD index.js package.json ./
RUN npm install
EXPOSE 3008
ENTRYPOINT ["node", "index.js"]
