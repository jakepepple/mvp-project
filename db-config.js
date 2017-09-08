const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://jake:bronson93@ds125994.mlab.com:25994/whats-my-time')
  .then(
    () => { console.log('connection to database successful') },
    err => { console.error(err) }
  );
const db = mongoose.connection;

const userSchema = new mongoose.Schema({
  username: String,
  bestScore: Number
})

const User = mongoose.model('User', userSchema);

exports.db = db;
exports.userSchema = userSchema;
exports.User = User;