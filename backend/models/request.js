const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  additionalMessage: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Request', RequestSchema);
