const express = require('express');
const path = require('path');
const db = require('./db-config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const user = db.User;

const app = express();
app.use(express.static('client'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
})

app.post('/users', (req, res) => {
  console.log(req.body);
  const newUser = new user(req.body);
  newUser.save(err => {
    if (err) {
      console.error(err);
    } else {
      console.log('successfully posted');
    }
  })
})

module.exports = app;