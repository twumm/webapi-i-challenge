// implement your API here
const express = require('express');
const server = express();

const userDB = require('./data/db');
const port = 5000;

server.use(express.json());

server.post('/api/users', (req, res) => {
  const { name, bio } = req.body;
  const user = {name, bio};
  if (!name || !bio) {
    return res.status(400).json({ errorMessage: "Please provide name and bio for the user" });
  }
  userDB.insert(user)
    .then(user => userDB.findById(user.id))
    .error(() => {
      return res.status(500).json({ error: "There was an error while saving the user to the database"});
    })
})

server.get('/api/users', (req, res) => {
  userDB.find()
    .then(users => res.status(200).json(users))
    .error(() => {
      res.status(500).json({ error: "The users information could not be retrieved." })
    })
})

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  userDB.findById(id)
    .then(user => {
      !user
      ? res.status(404).json({ error: "The user with the specified ID does not exist." })
      : res.status(200).json(user);
    })
    .error(() => {
      res.status(500).json({ error: "The user information could not be retrieved." });
    })
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