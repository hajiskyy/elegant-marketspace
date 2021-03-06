const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  comments: {
    type: String,
    default: null
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
})

const ratings = module.exports = mongoose.model('ratings', RatingSchema);

module.exports.getRatingsbyId = function (id, cb) {
  ratings.findById(id, cb)
}

module.exports.getRatingsofProduct = function (product_id, cb) {
  let query = { product: product_id }
  ratings.find(query).populate('user', 'FirstName LastName').exec(cb);
}

module.exports.getRatings = function (cb) {
  ratings.find(cb);
}

module.exports.productRating = function (user, product, cb) {
  let query = { user: user, product: product };
  ratings.findOne(query, cb);
}

module.exports.addRating = function (NewRating, cb) {
  NewRating.save(cb);
}
