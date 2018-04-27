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
  ratings.findById(id, cb);
}

module.exports.getRatingsofProduct = function (product, cb) {
  let query = { product: product }
  ratings.find(query, cb);
}

module.exports.getRatings = function (cb) {
  ratings.find(cb);
}

module.exports.userRating = function (user, cb) {
  let query = { user: user };
  ratings.findOne(query, cb);
}

module.exports.addRating = function (NewRating, cb) {
  NewRating.save(cb);
}
