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
      res.send({success: false, msg: 'Failed Add Brand'});
    } else {
      res.send({success: true, msg: 'Brand added'})
    }
  });
});

// Get brands
router.get('/getbrands', (req, res) => {
  brand.getBrands((err, brands) => {
    if (err) throw err;
    res.json({success: true, brands})
  });
});

module.exports = router;