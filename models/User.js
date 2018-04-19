const mongoose = require('mongoose')
const config = require('../config/db');

const UserSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const user = module.exports = mongoose.model('users', UserSchema);

module.exports.getUserbyId = function(id, cb){
  user.findById(id, cb)
}

module.exports.getUserbyEmail = function(email, cb){
  const query = { email:email }
  user.findOne(query, cb);
}

module.exports.addUser = function(newUser, cb){
  newUser.save(cb);
}
