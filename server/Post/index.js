const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  discussions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discussion',
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
    required: true,
  },
  rank: {
    type: Number,
    required: true,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  userLikes: {
    type: Array,
    default: [],
  },
  creationDate: {
    type: String,
    default: Date.now,
  },
  modificationDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Post', PostSchema);
