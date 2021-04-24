"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tweet_actions_1 = require("../actions/tweet_actions");
const TweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case tweet_actions_1.RECEIVE_TWEETS:
            action.tweets.data.map(tweet => newState.all[tweet._id] = tweet);
            return newState;
        case tweet_actions_1.RECEIVE_USER_TWEETS:
            action.tweets.data.map(tweet => newState.user[tweet._id] = tweet);
            return newState;
        case tweet_actions_1.RECEIVE_TWEET:
            newState.all[action.tweet._id] = action.tweet;
            return newState;
        case tweet_actions_1.RECEIVE_NEW_TWEET:
            newState.new = action.tweet.data;
            newState.all[action.tweet.data._id] = action.tweet.data;
            return newState;
        case tweet_actions_1.RECEIVE_LIKE:
            if (newState.user[action.tweet.data._id]) {
                newState.user[action.tweet.data._id] = action.tweet.data;
                newState.all[action.tweet.data._id] = action.tweet.data;
            }
            else {
                newState.all[action.tweet.data._id] = action.tweet.data;
            }
            return newState;
        default: return state;
    }
};
exports.default = TweetsReducer;
//# sourceMappingURL=tweet_reducer.js.map