const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    name: { type: String, default: 'User' },
    age: { type: Number, min: 18, required: false},
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
  });

const User = mongoose.model('Post', Post);
module.exports = User;