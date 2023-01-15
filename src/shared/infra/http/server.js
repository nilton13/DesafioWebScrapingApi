const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT ? process.env.PORT : 3000

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
});

module.exports = server;