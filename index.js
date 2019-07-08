// implement your API here
const express = require('express');
const server = express();

const userDB = require('./data/db');
const port = 5000;

server.use(express.json());

