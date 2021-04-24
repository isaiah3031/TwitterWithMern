"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const tweet_actions_1 = require("../../actions/tweet_actions");
const tweet_compose_1 = __importDefault(require("./tweet_compose"));
const mapStateToProps = state => ({
    currentUser: state.session.user,
    newTweet: state.tweets.new
});
const mapDispatchToProps = dispatch => ({
    composeTweet: data => dispatch(tweet_actions_1.composeTweet(data))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(tweet_compose_1.default);
//# sourceMappingURL=tweet_compose_container.js.map