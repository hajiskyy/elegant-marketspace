const express = require('express');
const config = require('../config/db');
const brand = require('../models/Brands');
const router = express.Router();

// Add brands
router.post('/addbrand', (req, res, next) => {
  let newBrand = new brand({
    ownerFirstName: req.body.ownerFirstName,
    ownerLastName: req.body.ownerLastName,
    brandName: req.body.brandName,
    description: req.body.description,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    url: req.body.url
  });

  brand.addBrand(newBrand, (err, brand) => {
    if(err) {
      res.json({success: false, msg: 'Failed Add Brand'});
    } else {
      res.json({success: true, msg: 'Brand added'})
    }
  });
});

module.exports = router;