const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();
const config = require('../config/db');
const ratings = require('../models/Ratings');

router.post('/add', (req, res, next) => {
  // Check if user has posted already
  ratings.userRating(req.body.user, (err, rating) => {
    if (err) throw err;
    if (!rating) {
      let newRating = new ratings({
        _id: new mongoose.Types.ObjectId(),
        likes: req.body.likes,
        comments: req.body.comments,
        product: req.body.product,
        user: req.body.user
      });

      ratings.addRating(newRating, (err, rating) => {
        if (err) throw err;
        res.json({ success: true, msg: 'comment added' });
      })
      
    } else if(rating.comments === null) {
      rating.comments = req.body.comments
      ratings.addRating(rating, (err, saved) => {
        if(err) throw err;
        res.json({ success: true, msg: 'comment added' });
      })
    } else {
      res.json({ success: false, msg: 'Cannot add Comments again!' });
    }
  });
});

router.post('/', (req, res) => {
  ratings.getRatingsofProduct(req.body.product, (err, rating) => {
    if (err) throw err;
    res.json(rating);
  })
})

router.get('/all', (req, res) => {

  ratings.getRatings((err, rating) => {
    if (err) throw err;
    res.json(rating);
  })
})








module.exports = router;