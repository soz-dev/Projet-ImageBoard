const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
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

module.exports = mongoose.model('Discussion', DiscussionSchema);
