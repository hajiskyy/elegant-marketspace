const express = require('express');
const router = express.Router();
const user = require('../models/User');
const config = require('../config/db');

router.post('/register', (req, res, next) => {
  user.getUserbyEmail(req.body.email, (err, User) => {

    if (err) throw err;
    // check if email already exists    
    if (User) {
      res.json({ success: false, msg: 'Account Already Exists' });
    } else {
      // if email doesnt exist
      let NewUser = new user({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        email: req.body.email,
        password: req.body.password,
        hasBrand: false
      });
      // add New user
      user.addUser(NewUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: 'Failed to register' });
        } else {
          res.json({ success: true, msg: 'User registered' });
        }
      });
    }
  });


});

router.post('/login', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  user.getUserbyEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.send({ success: false, msg: "user doesnt exist" });
    }
    if (user.password === password) {
      res.json({ success: true, user });
    } else {
      res.send({ success: false, msg: "Wrong Password" })
    }
  });
})

module.exports = router;