const express = require('express');
const router = express.Router();
const user = require('../models/User');
const config = require('../config/db');

router.post('/register', (req, res, next) => {
  let NewUser = new user ({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    email: req.body.email,
    password: req.body.password
  });
  user.addUser(NewUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

module.exports = router;