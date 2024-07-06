const mongoose = require('mongoose');

const GeneratedIdSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('GeneratedId', GeneratedIdSchema);
