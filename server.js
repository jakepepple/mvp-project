const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/client/index.html`);
  //res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

