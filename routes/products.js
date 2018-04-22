const express = require('express');
const router = express.Router();
const config = require('../config/db');
const product = require('../models/Products');
const upload = require('../config/gridFsStorage');
const mongoose = require('mongoose')

// Add Products 
router.post('/addproduct', upload.single('file'), (req, res, next) => {
  let newProduct = new product({
    id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    imageUrl: "http://localhost:5000/image/" + req.file.filename,
    availability: req.body.availability,
    discount: req.body.discount
  });

  product.addProduct(newProduct, (err, prod) => {
    if (err) {
      res.send({ success: false, msg: 'Failed to register' });
    } else {
      res.send({ success: true, msg: 'Product added' })
    }
  });
});

// Get products
router.get('/getproducts', (req, res) => {
  product.getProducts((err, products) => {
    if (err) throw err;
    res.json(products);
  })
})

// get products by category
router.get('/getproducts/:category', (req, res) => {
  let category = req.params.category;
  if (category === "") {
    product.getProducts((err, products) => {
      if (err) throw err;
      res.json(products);
    })
  } else {
    product.getProductByCategory(category, (err, product) => {
      if (err) throw err;
      res.json(product);
    });
  }

});

module.exports = router;