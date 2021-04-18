import {
  RECEIVE_TWEETS,
  RECEIVE_TWEET,
  RECEIVE_USER_TWEETS,
  RECEIVE_NEW_TWEET,
  RECEIVE_LIKE
} from '../actions/tweet_actions'

const TweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_TWEETS:
      action.tweets.data.map(tweet => newState.all[tweet._id] = tweet)
      return newState;
    case RECEIVE_USER_TWEETS:
      action.tweets.data.map(tweet => newState.user[tweet._id] = tweet)
      return newState;
    case RECEIVE_TWEET:
      newState.all[action.tweet._id] = action.tweet
      return newState
    case RECEIVE_NEW_TWEET:
      newState.new[action.tweets.data._id] = action.tweets.data
      return newState;
    case RECEIVE_LIKE:
      if (newState.user[action.tweet.data._id]) {
        newState.user[action.tweet.data._id] = action.tweet.data
        newState.all[action.tweet.data._id] = action.tweet.data
      } else {
        newState.all[action.tweet.data._id] = action.tweet.data
      }
      return newState
    default: return state;
  }
}

export default TweetsReducer;