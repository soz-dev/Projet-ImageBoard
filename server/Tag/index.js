/* eslint-disable func-names */
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  modificationDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Tag', tagSchema);
