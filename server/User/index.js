const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  iconImage: {
    type: String,
    default: 'public/profile_plain.svg',
  },
  description: {
    type: String,
    default: "Vous n'avez pas de description",
  },
  status: {
    type: Number,
    default: 0,
  },
  privilege: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0,
  },
  reputation: {
    type: Number,
    enum: [0, 100, 200, 300, 400, 500],
    default: 0,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  modification_date: {
    type: Date,
  },
});

module.exports = mongoose.model('User', userSchema);
