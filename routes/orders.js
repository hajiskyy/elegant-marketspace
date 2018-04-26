const express = require('express');
const router = express.Router();
const config = require('../config/db');
const order = require('../models/Orders');
const mongoose = require('mongoose');
const product = require('../models/Products')


router.post('/place', (req, res, next) => {
  req.body.forEach(products => {
        let NewOrder = new order({
          _id: new mongoose.Types.ObjectId(),
          quantity: products.quantity,
          product: products.product,
          user: products.user,
          brandName: products.brandName
        });
        order.addOrder(NewOrder, (err, order) => {
          if(err) throw err;
        });
    }); 
    res.json({ success: true, msg: 'Your Order has been placed' });
});

router.get('/getorders/:brandName', (req, res) => {
  let brandName = req.params.brandName;
  order.getOrderByBrandName(brandName, (err, orders) => {
    if (err) {
      res.send('No Orders Available');
    };
    res.json(orders);
  });
});

router.get('/getorders', (req, res) => {
  order.getOrders((err, orders) => {
    if (err) throw err;
    res.json(orders);
  })
});


module.exports = router;