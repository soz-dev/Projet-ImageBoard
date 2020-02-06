const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    default: 'Anonyme',
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  creationDate: {
    type: String,
    default: Date.now,
  },
  modificationDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
