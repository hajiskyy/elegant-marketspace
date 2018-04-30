const express = require('express');
const router = express.Router();
const config = require('../config/db');
const product = require('../models/Products');
const upload = require('../config/gridFsStorage');
const mongoose = require('mongoose')

// Add Products 
router.post('/addproduct', upload.single('file'), (req, res, next) => {
  let newProduct = new product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    imageUrl: "https://fierce-dawn-51889.herokuapp.com/image/" + req.file.filename,
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
  });
});

// Get products
router.get('/getproduct/:id', (req, res) => {
  let id = req.params.id;
  product.getProdById(id,(err, prod) => {
    if (err) throw err;
    res.json(prod);
  });
});


// get products by category
router.get('/getproductsCategory/:category', (req, res) => {
  let category = req.params.category;
  product.getProductByCategory(category, (err, product) => {
    if (err) throw err;
    res.json(product);
  });
});

// get products by brand
router.get('/getproductsBrand/:brand', (req, res) => {
  let brand = req.params.brand;
  product.getProductByBrand(brand, (err, product) => {
    if (err) throw err;
    res.json(product);
  });
});

//sort brand products by category
router.get('/getBrandCategory/:brand/:category', (req, res) => {
  let brand = req.params.brand;
  let category = req.params.category;
    product.getCategoryofProducts(category, brand, (err, prod) => {
      if(err) throw err;
      //return sorted products
      res.json(prod);
    });
});
module.exports = router;