"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlikeTweet = exports.likeTweet = exports.fetchUserTweets = exports.fetchTweet = exports.fetchTweets = exports.composeTweet = exports.receiveLike = exports.receiveTweet = exports.receiveTweets = exports.receiveUserTweets = exports.receiveNewTweet = exports.RECEIVE_LIKE = exports.RECEIVE_TWEETS = exports.RECEIVE_USER_TWEETS = exports.RECEIVE_TWEET = exports.RECEIVE_NEW_TWEET = void 0;
const TweetAPIUtil = __importStar(require("../util/tweet_api_util"));
exports.RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET';
exports.RECEIVE_TWEET = 'RECEIVE_TWEET';
exports.RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS';
exports.RECEIVE_TWEETS = 'RECEIVE_TWEETS';
exports.RECEIVE_LIKE = 'RECEIVE_LIKE';
const receiveNewTweet = tweet => ({
    type: exports.RECEIVE_NEW_TWEET,
    tweet
});
exports.receiveNewTweet = receiveNewTweet;
const receiveUserTweets = tweets => ({
    type: exports.RECEIVE_USER_TWEETS,
    tweets
});
exports.receiveUserTweets = receiveUserTweets;
const receiveTweets = tweets => ({
    type: exports.RECEIVE_TWEETS,
    tweets
});
exports.receiveTweets = receiveTweets;
const receiveTweet = tweet => ({
    type: exports.RECEIVE_TWEETS,
    tweet
});
exports.receiveTweet = receiveTweet;
const receiveLike = tweet => ({
    type: exports.RECEIVE_LIKE,
    tweet
});
exports.receiveLike = receiveLike;
const composeTweet = tweet => dispatch => TweetAPIUtil.writeTweet(tweet).then((tweet) => (dispatch(exports.receiveNewTweet(tweet)))).catch(err => console.log(err));
exports.composeTweet = composeTweet;
const fetchTweets = () => dispatch => TweetAPIUtil.getTweets().then(tweets => dispatch(exports.receiveTweets(tweets))).catch(err => console.log(err));
exports.fetchTweets = fetchTweets;
const fetchTweet = id => dispatch => TweetAPIUtil.getTweet(id).then(tweet => dispatch(exports.receiveTweet(tweet)).catch(err => console.log(err)));
exports.fetchTweet = fetchTweet;
const fetchUserTweets = id => dispatch => TweetAPIUtil.getUserTweets(id).then(tweets => dispatch(exports.receiveUserTweets(tweets))).catch(err => console.log(err));
exports.fetchUserTweets = fetchUserTweets;
const likeTweet = (tweetId, userId) => dispatch => TweetAPIUtil.likeTweet(tweetId, userId)
    .then(tweet => dispatch(exports.receiveLike(tweet)));
exports.likeTweet = likeTweet;
const unlikeTweet = (tweetId, userId) => dispatch => TweetAPIUtil.unlikeTweet(tweetId, userId)
    .then(tweet => dispatch(exports.receiveLike(tweet)));
exports.unlikeTweet = unlikeTweet;
//# sourceMappingURL=tweet_actions.js.map