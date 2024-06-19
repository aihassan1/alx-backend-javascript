const express = require('express');
const app = require('./4-http');

app = express();

app.getConnections('/', (req, res) => {
  res.send('Hello Holberton School!');
});
