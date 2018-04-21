const express = require('express');
const router = express.Router();
const config = require('../config/db');
const product = require('../models/Products');
const upload = require('../config/gridFsStorage');

// Add Products 
router.post('/addproduct',upload.single('file'),(req, res, next) => {
  let newProduct = new product ({
    name: req.body.name,
    description:req.body.description,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    imageUrl: "http://localhost:5000/image/"+req.file.filename,
    availability: req.body.availability,
    discount: req.body.discount
  });

  product.addProduct(newProduct, (err, prod) =>{
    if(err) {
      res.send({success: false, msg: 'Failed to register'});
    } else {
      res.send({success: true, msg: 'Product added'})
    }
  });
});

// Get products
router.get('/getproducts',(req, res) => {
  product.getProducts((err, products) => {
    if(err) throw err;
    res.json({success: true,products});
  })
})

module.exports = router;