const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likedTweets: [{ type: mongoose.Schema.ObjectId, ref: 'Tweet' }]
}, {
    timestamps: true
});
module.exports = User = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map