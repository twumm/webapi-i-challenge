// implement your API here
const express = require('express');
const server = express();

const userDB = require('./data/db');
const port = 5000;

server.use(express.json());

server.post('/api/users', (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    return res.status(400).json({ errorMessage: "Please provide name and bio for the user" });
  }
})

server.get('/api/users', (req, res) => {
  res.send('get all users');
})

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`get user with ${id}`);
})

server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`delete user with id ${id}`);
})

server.put('/api/users/:id', (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  res.send(`update user with id ${id}`);
})

server.listen(port, () => {
  console.log('listening on port', port);
})