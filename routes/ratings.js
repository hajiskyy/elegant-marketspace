const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const config = require('../config/db');
const ratings = require('../models/Ratings');
//@ts-check

router.post('/add', (req, res, next) => {
  let newRating = new ratings({
    _id: new mongoose.Types.ObjectId(),
    likes: req.body.likes,
    comments: req.body.comments,
    product: req.body.product,
    user: req.body.user
  });
  // Check if user has posted already
  ratings.productRating(req.body.user, req.body.product, (err, rating) => {
    if (err) throw err;
    if(rating) {
      if (rating.likes > 0) {
        newRating.likes = 0;
        ratings.addRating(newRating, (err, addedRating) => {
          if (err) throw err;
          res.json({ success: true, msg: 'Thanks for the feedback' });
        });
      } else {
        ratings.addRating(newRating, (err, addedRating) => {
          if (err) throw err;
          res.json({ success: true, msg: 'Thanks for the feedback' });
        });
      }
    } else {
      ratings.addRating(newRating, (err, addedRating) => {
        if (err) throw err;
        res.json({ success: true, msg: 'Thanks for the feedback' });
      });
    }
      
    });
  });

router.post('/:product', (req, res, next) => {
  let product = req.params.product
  ratings.getRatingsofProduct(product, (err, rating) => {
    if (err) throw err;
    if (rating.length > 0) {
      res.json({ success: true, rating });
    } else {
      res.json({ success: false, msg: "No reviews for this products yet" })
    }
  });
});

router.get('/all', (req, res) => {
  ratings.getRatings((err, rating) => {
    if (err) throw err;
    res.json(rating);
  });
});

module.exports = router;