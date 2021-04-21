import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import passport from 'passport'
import Tweet from '../../models/Tweet'
import validateTweetInput from '../../validation/tweets'

// Return all tweets
// api/tweets/
router.get('/', (req: Request, res: Response) => {
  Tweet.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }))
});

// Return all tweets by a certain user
// api/tweets/user/:user_id
router.get('/user/:user_id', (req: Request, res: Response) => {
  Tweet.find({ 'user.id': req.params.user_id })
    .then(tweets => {
      return res.json(tweets)
    })
    .catch(err =>
      res.status(404).json({ notweetsfound: 'No tweets found from that user' })
    )
})

// Return a specific tweet
// api/tweet/:id
router.get('/:id', (req: Request, res: Response) => {
  Tweet.findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err =>
      res.status(404).json({ notweetfound: 'No tweet found with that ID' })
    );
})

// Like a tweet
// api/tweet/:tweetId/like
router.patch('/:tweet_id/like',
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    Tweet.findById(req.params.tweet_id)
      .then(tweet => {
        tweet.likedBy.push({ id: req.user._doc.id, handle: req.user._doc.handle })
        tweet.save()
        res.json(tweet)
      })
      .catch(err => res.status(404).json({ failedToLike: 'Failed to like tweet' }))
  })

// Unlike a tweet
// api/tweet/:tweetId/unlike
router.patch('/:tweet_id/unlike',
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    Tweet.findById(req.params.tweet_id)
      .then(tweet => {
        tweet.likedBy = tweet.likedBy.filter(user => user._id === req.user._doc.id)
        tweet.save()
        res.json(tweet)
      })
      .catch(err => res.status(404).json({ failedToUnlike: 'Failed to unlike tweet' }))
  })

// Post a tweet
// api/tweet/
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req: Request, res: Response) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
      text: req.body.text,
      user: { id: req.user.id, handle: req.user.handle }
    })

    newTweet.save().then(tweet => res.json(tweet))
  }
)

module.exports = router;