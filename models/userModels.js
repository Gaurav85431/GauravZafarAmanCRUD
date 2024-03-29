const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true

  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model('User', userSchema);