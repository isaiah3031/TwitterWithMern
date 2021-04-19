import * as TweetAPIUtil from '../util/tweet_api_util'

export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET'
export const RECEIVE_TWEET = 'RECEIVE_TWEET'
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'

export const receiveNewTweet = tweet => ({
  type: RECEIVE_NEW_TWEET,
  tweet
})

export const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
})

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
})

export const receiveTweet = tweet => ({
  type: RECEIVE_TWEETS,
  tweet
})

export const receiveLike = tweet => ({
  type: RECEIVE_LIKE,
  tweet
})

export const composeTweet = tweet => dispatch =>
  TweetAPIUtil.writeTweet(tweet).then(() => (
    dispatch(receiveNewTweet(tweet))
  )).catch(err => console.log(err))

export const fetchTweets = () => dispatch => 
  TweetAPIUtil.getTweets().then(tweets =>
    dispatch(receiveTweets(tweets))
  ).catch(err => console.log(err))


export const fetchTweet = id => dispatch => 
  TweetAPIUtil.getTweet(id).then(tweet =>
    dispatch(receiveTweet(tweet)).catch(err => console.log(err)))


export const fetchUserTweets = id => dispatch => 
  TweetAPIUtil.getUserTweets(id).then(tweets =>
    dispatch(receiveUserTweets(tweets))
  ).catch(err => console.log(err))


export const likeTweet = (tweetId, userId) => dispatch => 
  TweetAPIUtil.likeTweet(tweetId, userId)
    .then(tweet => dispatch(receiveLike(tweet)))


export const unlikeTweet = (tweetId, userId) => dispatch => 
  TweetAPIUtil.unlikeTweet(tweetId, userId)
    .then(tweet => dispatch(receiveLike(tweet)))
