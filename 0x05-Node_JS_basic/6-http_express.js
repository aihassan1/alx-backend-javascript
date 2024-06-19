const express = require('express');
const app = require('./4-http');

const app = express();

app.getConnections('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
