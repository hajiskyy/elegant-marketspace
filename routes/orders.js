const express = require('express');
const router = express.Router();
const config = require('../config/db');
const order = require('../models/Orders');
const mongoose = require('mongoose');
const product = require('../models/Products')


router.post('/place', (req, res, next) => {

  // Check if products exists
  product.getProdById(req.body.product, (err, prod) => {
    if (err) throw err;
    if (!prod) {
      res.json({ success: false, msg: 'product does not exist' });
    } else {
      let NewOrder = new order({
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.product,
        brandName: req.body.brandName
      });

      order.addOrder(NewOrder, (err, order) => {
        if (err) {
          res.json({ success: false, msg: 'Failed to Place Order' });
        } else {
          res.json({ success: true, msg: 'Your Order has been placed' });
        }
      });
    }
  });

});

router.get('/getorders/:brandName', (req, res) => {
  let brandName = req.params.brandName;
    order.getOrderByBrandName(brandName, (err, orders) => {
      if(err){
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