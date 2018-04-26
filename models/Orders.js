const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  brandName:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  }
});

const order = module.exports = mongoose.model('order', orderSchema);

module.exports.getOrdersbyId = function(id, cb){
  order.findById(id,cb);
}

module.exports.getOrders = function(cb){
  order.find().populate('product','name price discount category').populate('user','email FirstName LastName').exec(cb);
}

module.exports.getOrderByBrandName = function(brandName,cb){
  const query = {brandName:brandName};
  order.find(query)
  .populate('product','name price discount category').populate('user','FirstName LastName email').exec(cb);
}

module.exports.addOrder = function(NewOrder, cb){
  NewOrder.save(cb);
}