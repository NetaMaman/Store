const mongoose = require('mongoose');
//const User = require('./userModel');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A purchase must have a user'],
  },
  products: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Product',
    required: [true, 'Purchase must get list of products'],
  },
  quantity: {
    type: Number,
    required: [true, 'A purchase must have a total quantity'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'A purchase must have a total price'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

const Order = mongoose.model('Oredr', orderSchema);

module.exports = Order;
