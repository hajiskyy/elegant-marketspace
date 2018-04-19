const express = require('express');
const router = express.Router();
const config = require('../config/db');
const product = require('../models/Products');

// Add Products 
router.post('/addproduct', (req, res, next) => {
  let newProduct = new product ({
    name: req.body.name,
    description:req.body.description,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    availability: req.body.availability,
    discount: req.body.discount
  });

  product.addProduct(newProduct, (err, prod) =>{
    if(err) {
      res.json({success: false, msg: 'Failed to register'});
    } else {
      res.json({success: true, msg: 'Product added'})
    }
  });
});

module.exports = router;