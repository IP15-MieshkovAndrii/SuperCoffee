const http = require('node:http');

const PORT = 8000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();

  }).listen(PORT);

  console.log(`Running server on port ${PORT}`);