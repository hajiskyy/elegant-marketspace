const mongoose = require('mongoose');
const config = require('../config/db'); 

const ProductSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  discount: {
    type: Number
  }
});

const product = module.exports = mongoose.model('products', ProductSchema);

module.exports.getProdById = function(id, cb) {
  product.findById(id, cb);
}

module.exports.addProduct = function(newProduct, cb) {
  newProduct.save(cb);
}

module.exports.getProductbyname = function(name, cb) {
  const query= {name: name}
  product.findOne(query, cb);
}

module.exports.getProductByCategory = function(category, cb) {
  const query= {category: category}
  product.find(query, cb);
}

module.exports.getProducts = function(cb){
  product.find({},cb);
}
