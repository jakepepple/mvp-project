const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://jake:bronson93@ds125994.mlab.com:25994/whats-my-time');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database successfully connected')
})


const app = express();
app.use(express.static('client'))

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

