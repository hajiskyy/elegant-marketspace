const mongoose = require('mongoose');
const config = require('../config/db');

const BrandSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  ownerFirstName: {
    type: String,
    required: true
  },
  ownerLastName: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
})

const brand = module.exports = mongoose.model('brands', BrandSchema);

module.exports.getBrandById = function(id, cb){
  brand.findById(id, cb);
}

module.exports.getBrandByEmail = function(email, cb){
  const query = { email: email }
  brand.findOne(query, cb);
}

module.exports.getBrandName = function(name, cb){
  const query = { name: name }
  brand.findOne(name, cb);
}

module.exports.addBrand = function(newBrand, cb){
  newBrand.save(cb);
}

module.exports.getBrands = function(cb){
  brand.find({},cb);
}