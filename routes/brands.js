const express = require('express');
const config = require('../config/db');
const brand = require('../models/Brands');
const user = require('../models/User');
const router = express.Router();
const upload = require('../config/gridFsStorage');


// Add brands
router.post('/addbrand', upload.single('file'), (req, res, next) => {
  let newBrand = new brand({
    ownerFirstName: req.body.ownerFirstName,
    ownerLastName: req.body.ownerLastName,
    brandName: req.body.brandName,
    description: req.body.description,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    url: req.body.url,
    imgUrl: "http://localhost:5000/image/" + req.file.filename
  });
  let NewUser = new user({
    FirstName: req.body.ownerFirstName,
    LastName: req.body.ownerLastName,
    email: req.body.email,
    password: req.body.password,
    hasBrand: true
  });

  brand.addBrand(newBrand, (err, brand) => {
    if (err) {
      res.send({ success: false, msg: 'Failed to register Brand' });
    } else {
      user.addUser(NewUser, (err, user) => {
        if (err) {
          res.send({ success: false, msg: 'Failed to register' });
        } else {
          res.send({ success: true, msg: 'Brand added and Account Created' });
        }
      });
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