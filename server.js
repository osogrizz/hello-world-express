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
  res.send('Hello World from Express!');
});

server.get('/hobbits', (req,res) => {
  res.send('Welcome to Hobbiton');
});

server.post('/hobbits', (req,res) => {
  res.status(201).json({ url: '/hobbits', operation: 'POST' });
});

server.put('/hobbits', (req,res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});

server.delete('/hobbits', (req,res) => {
  res.sendStatus(204);
});




server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

