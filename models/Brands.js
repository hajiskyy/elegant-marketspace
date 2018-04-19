const mongoose = require('mongoose');
const config = require('../config/db');

const BrandSchema = mongoose.Schema({
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
    type: String,
    required: true
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
  url: {
    type: String,
    required: true
  }
})

const brand = module.exports = mongoose.model('brands', BrandSchema);

module.exports.getBrandById = function(id, cb){
  brand.findById(id, cb);
}

module.exports.getBrandByName = function(name, cb){
  const query = { name: name }
  brand.findOne(name, cb);
}

module.exports.addBrand = function(newBrand, cb){
  newBrand.save(cb);
}