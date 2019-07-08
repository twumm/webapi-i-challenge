// implement your API here
const express = require('express');
const cors = require('cors');
const server = express();

const userDB = require('./data/db');
const port = 5000;

server.use(express.json());
server.use(cors())

server.post('/api/users', (req, res) => {
  const { name, bio } = req.body;
  const user = {name, bio};
  if (!name || !bio) {
    return res.status(400).json({ errorMessage: "Please provide name and bio for the user" });
  }
  userDB.insert(user)
    .then(user => {
      userDB.findById(user.id)
        .then(user => res.status(200).json(user));
    })
    .catch(() => {
      return res.status(500).json({ error: "There was an error while saving the user to the database"});
    })
})

server.get('/api/users', (req, res) => {
  userDB.find()
    .then(users => res.status(200).json(users))
    .catch(() => {
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
    .catch(() => {
      res.status(500).json({ error: "The user information could not be retrieved." });
    })
})

server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  userDB.remove(id)
    .then(deleted => {
      return deleted 
      ? res.status(204).end()
      : res.status(404).json({ message: "The user with the specified ID does not exist." })
    })
    .catch(() => {
      return res.status(404).json({ error: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = { name, bio } = req.body;

  if (!name || !bio) {
    return res.status(400).json({ errorMessage: "Please provide name and bio for the user" });
  }
  userDB.update(id, user)
    .then(updatedUser => {
      updatedUser
      ? res.status(200).json(updatedUser)
      : res.status(404).json({ message: "The user with the specified ID does not exist." });
    })
    .catch(() => {
      res.status(500).json({ error: "The user information could not be modified." })
    })
})

server.listen(port, () => {
  console.log('listening on port', port);
})