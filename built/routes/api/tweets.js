"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const passport_1 = __importDefault(require("passport"));
const Tweet_1 = __importDefault(require("../../models/Tweet"));
const tweets_1 = __importDefault(require("../../validation/tweets"));
// Return all tweets
// api/tweets/
router.get('/', (req, res) => {
    Tweet_1.default.find()
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});
// Return all tweets by a certain user
// api/tweets/user/:user_id
router.get('/user/:user_id', (req, res) => {
    Tweet_1.default.find({ 'user.id': req.params.user_id })
        .then(tweets => {
        return res.json(tweets);
    })
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found from that user' }));
});
// Return a specific tweet
// api/tweet/:id
router.get('/:id', (req, res) => {
    Tweet_1.default.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err => res.status(404).json({ notweetfound: 'No tweet found with that ID' }));
});
// Like a tweet
// api/tweet/:tweetId/like
router.patch('/:tweet_id/like', passport_1.default.authenticate('jwt', { session: false }), async (req, res) => {
    const tweet = await Tweet_1.default.findById(req.params.tweet_id);
    if (tweet) {
        try {
            const modifiedLikedBy = tweet.likedBy;
            const { id, handle } = req.user;
            modifiedLikedBy.push({ "id": id, "handle": handle });
            tweet.likedBy = modifiedLikedBy;
            tweet.save();
            res.json(tweet);
        }
        catch (error) {
            res.status(404).json({ failedToLike: 'Failed to like tweet' });
        }
    }
    else {
        res.status(404).json({ failedToFind: 'Failed to find tweet' });
    }
    // .catch(err => res.status(404).json({ failedToLike: 'Failed to like tweet' }))
});
// Unlike a tweet
// api/tweet/:tweetId/unlike
router.patch('/:tweet_id/unlike', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    Tweet_1.default.findByIdAndUpdate(req.params.tweet_id, req.body, (err, tweet) => {
        const modifiedLikedBy = tweet.likedBy;
        const { id, handle } = req.user;
        modifiedLikedBy.filter({ "id": id });
        tweet.replaceOne({ likedBy: modifiedLikedBy });
        tweet.save();
        res.json(tweet);
    });
    // .catch(err => res.status(404).json({ failedToUnlike: 'Failed to unlike tweet' }))
});
// Post a tweet
// api/tweet/
router.post('/', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = tweets_1.default(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newTweet = new Tweet_1.default({
        text: req.body.text,
        user: { id: req.user.id, handle: req.user.handle }
    });
    newTweet.save().then(tweet => res.json(tweet));
});
exports.default = router;
//# sourceMappingURL=tweets.js.map