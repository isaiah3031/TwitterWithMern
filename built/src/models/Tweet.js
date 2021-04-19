const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TweetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User', handle: String }]
});
module.exports = Tweet = mongoose.model('tweet', TweetSchema);
//# sourceMappingURL=Tweet.js.map