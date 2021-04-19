const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');
// Return all tweets
// api/tweets/
router.get('/', (req, res) => {
    Tweet.find()
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});
// Return all tweets by a certain user
// api/tweets/user/:user_id
router.get('/user/:user_id', (req, res) => {
    Tweet.find({ user: req.params.user_id })
        .then(tweets => {
        return res.json(tweets);
    })
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found from that user' }));
});
// Return a specific tweet
// api/tweet/:id
router.get('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err => res.status(404).json({ notweetfound: 'No tweet found with that ID' }));
});
// Like a tweet
// api/tweet/:tweetId/like
router.patch('/:tweet_id/like', passport.authenticate('jwt', { session: false }), (req, res) => {
    Tweet.findById(req.params.tweet_id)
        .then(tweet => {
        tweet.likedBy.push(Object.keys(req.body)[0]);
        tweet.save();
        res.json(tweet);
    })
        .catch(err => res.status(404).json({ failedToLike: 'Failed to like tweet' }));
});
// Unlike a tweet
// api/tweet/:tweetId/unlike
router.patch('/:tweet_id/unlike', passport.authenticate('jwt', { session: false }), (req, res) => {
    Tweet.findById(req.params.tweet_id)
        .then(tweet => {
        tweet.likedBy = tweet.likedBy.filter(id => id != Object.keys(req.body)[0]);
        tweet.save();
        res.json(tweet);
    })
        .catch(err => res.status(404).json({ failedToUnlike: 'Failed to unlike tweet' }));
});
// Post a tweet
// api/tweet/
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newTweet = new Tweet({
        text: req.body.text,
        user: req.user.id
    });
    newTweet.save().then(tweet => res.json(tweet));
});
module.exports = router;
//# sourceMappingURL=tweets.js.map