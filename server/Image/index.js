const mongoose = require('mongoose');

const imageShema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Image', imageShema);
