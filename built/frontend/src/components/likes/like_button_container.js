"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const like_button_1 = __importDefault(require("./like_button"));
const tweet_actions_1 = require("../../actions/tweet_actions");
const mapStateToProps = (state, ownProps) => ({
    likeBy: ownProps.likedBy,
    currentUser: state.session.user,
    tweetId: ownProps.tweetId,
});
const mapDispatchToProps = dispatch => ({
    likeTweet: (tweetId, userId) => dispatch(tweet_actions_1.likeTweet(tweetId, userId)),
    unlikeTweet: (tweetId, userId) => dispatch(tweet_actions_1.unlikeTweet(tweetId, userId))
});
const LikeButtonContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(like_button_1.default);
exports.default = LikeButtonContainer;
//# sourceMappingURL=like_button_container.js.map