const http = require('node:http');
const sequelize = require('./config/db');
const router = require('./routes/router');

require('dotenv').config();

const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME || '127.0.0.1'

const server = http.createServer((req, res) => {
  router(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

server.on('error', err => {
  if (err.code === 'EACCES') {
    console.log(`No access to port: ${port}`);
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
