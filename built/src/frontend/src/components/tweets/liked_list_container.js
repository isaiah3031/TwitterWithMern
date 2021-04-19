"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const tweet_actions_1 = require("../../actions/tweet_actions");
const liked_list_1 = __importDefault(require("./liked_list"));
const mapStateToProps = (state, ownProps) => ({
    likedBy: ownProps.likedBy,
    tweetId: ownProps.tweetId,
    currentUser: state.session.user
});
const mapDispatchToProps = dispatch => ({
    likeTweet: (tweetId, userId) => dispatch(tweet_actions_1.likeTweet(tweetId, userId)),
    unlikeTweet: (tweetId, userId) => dispatch(tweet_actions_1.unlikeTweet(tweetId, userId)),
    fetchTweet: id => dispatch(tweet_actions_1.fetchTweet(id))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(liked_list_1.default);
//# sourceMappingURL=liked_list_container.js.map