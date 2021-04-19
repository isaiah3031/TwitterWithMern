"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const tweet_actions_1 = require("../../actions/tweet_actions");
const tweets_1 = __importDefault(require("./tweets"));
const mapStateToProps = state => ({
    tweetList: Object.values(state.tweets.all)
});
const mapDispatchToProps = dispatch => ({
    fetchTweets: () => dispatch(tweet_actions_1.fetchTweets())
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(tweets_1.default);
//# sourceMappingURL=tweets_container.js.map