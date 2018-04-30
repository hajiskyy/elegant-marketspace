const express = require('express');
const config = require('../config/db');
const brand = require('../models/Brands');
const user = require('../models/User');
const router = express.Router();
const upload = require('../config/gridFsStorage');
const mongoose = require('mongoose');


// Add brands
router.post('/addbrand', upload.single('file'), (req, res, next) => {
  let newBrand = new brand({
    _id: new mongoose.Types.ObjectId(),
    ownerFirstName: req.body.ownerFirstName,
    ownerLastName: req.body.ownerLastName,
    brandName: req.body.brandName,
    description: req.body.description,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    url: req.body.url,
    imgUrl: "http://localhost:8080/image/" + req.file.filename
  });
  let NewUser = new user({
    _id: new mongoose.Types.ObjectId(),
    FirstName: req.body.ownerFirstName,
    LastName: req.body.ownerLastName,
    email: req.body.email,
    password: req.body.password,
    hasBrand: true
  });

  brand.addBrand(newBrand, (err, brand) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register Brand' });
    } else {
      // check if user already exists
      user.getUserbyEmail(req.body.email, (err, User) => {
        if(err) throw err;
        //if account exists
        if(User) {
          res.json({ success: false, msg: 'Account Already Exists' });
        } else {
          // if not, add user
          user.addUser(NewUser, (err, user) => {
            if (err) {
              res.json({ success: false, msg: 'Failed to register' });
            } else {
              res.json({ success: true, msg: 'Brand added and Account Created' });
            }
          });
        }
      })

    }
  });
});

// Get brands
router.get('/getbrands', (req, res) => {
  brand.getBrands((err, brands) => {
    if (err) throw err;
    res.json({ success: true, brands })
  });
});

module.exports = router;