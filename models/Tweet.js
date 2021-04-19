const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    handle: {
      type: String
    }
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likedBy: [{
    id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User', handle: String
    },
    handle: {
      type: String,
      required: true
    }
  }]
})

module.exports = Tweet = mongoose.model('tweet', TweetSchema);