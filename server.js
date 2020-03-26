// const http = require('http');
const express = require('express');

const port = 5000;

const server = express();

// const server = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader('Contenty-Type', 'text-plain');
//   res.end('Hellow World, from Node.js');
// })

server.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})
