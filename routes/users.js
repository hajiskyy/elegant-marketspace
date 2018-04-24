const express = require('express');
const router = express.Router();
const user = require('../models/User');
const mongoose = require('mongoose');
const brand = require('../models/Brands');

router.post('/register', (req, res, next) => {
  user.getUserbyEmail(req.body.email, (err, User) => {
    if (err) throw err;
    // check if email already exists    
    if (User) {
      res.json({ success: false, msg: 'Account Already Exists' });
    } else {
      // if email doesnt exist
      let NewUser = new user({
        _id: new mongoose.Types.ObjectId(),
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
      res.json({ success: false, msg: "user doesnt exist" });
    } else {
      if (user.password === password) {
        if(user.hasBrand){
          brand.getBrandByEmail(email, (err, brand) => {
            if(err) throw err;
            res.json({ success: true, user,brand:brand.brandName });
          })
        } else {
          res.json({ success: true, user });
        }
      } else {
        res.json({ success: false, msg: "Wrong Password" })
      }
    }

  });
})

module.exports = router;