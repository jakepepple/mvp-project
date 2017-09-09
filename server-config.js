const express = require('express');
const path = require('path');
const db = require('./db-config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = db.User;

const app = express();
app.use(express.static('client'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
})

app.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) {
      console.error(err);
    } else {
      console.log('successfully posted');
      res.send("success")
    }
  })
})

app.get('/scores', (req, res) => {
  
  User.find({}, null, {sort: {bestScore: 1}}, (err, users) => {
    if (err) {
      console.error(err);
    } else {
      let mappedResponse = users.map(userObj => {  
        return {
          username: userObj.username,
          bestScore: userObj.bestScore
        }
      })
      res.send(mappedResponse);

    }
  })
})

app.get('/myscores', (req, res) => {

  const username = req.query.user;
  User.findOne({username: username}, (err, user) => {
    if (err) {
      console.error(err);
    } else {
      res.send(user);
    }
  })
})

module.exports = app;