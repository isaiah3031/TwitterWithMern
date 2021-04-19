"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const tweet_actions_1 = require("../../actions/tweet_actions");
const profile_1 = __importDefault(require("./profile"));
const mapStateToProps = state => ({
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
});
const mapDispatchToProps = dispatch => ({
    fetchUserTweets: id => dispatch(tweet_actions_1.fetchUserTweets(id))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(profile_1.default);
//# sourceMappingURL=profile_container.js.map