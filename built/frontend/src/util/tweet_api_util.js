"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlikeTweet = exports.likeTweet = exports.writeTweet = exports.getUserTweets = exports.getTweet = exports.getTweets = void 0;
const axios_1 = __importDefault(require("axios"));
const getTweets = () => {
    return axios_1.default.get('/api/tweets');
};
exports.getTweets = getTweets;
const getTweet = id => {
    return axios_1.default.get(`/api/tweet/${id}`);
};
exports.getTweet = getTweet;
const getUserTweets = id => {
    return axios_1.default.get(`/api/tweets/user/${id}`);
};
exports.getUserTweets = getUserTweets;
const writeTweet = data => {
    return axios_1.default.post('/api/tweets/', data);
};
exports.writeTweet = writeTweet;
const likeTweet = (tweetId, data) => {
    return axios_1.default.patch(`/api/tweets/${tweetId}/like`, data);
};
exports.likeTweet = likeTweet;
const unlikeTweet = (tweetId, data) => {
    return axios_1.default.patch(`/api/tweets/${tweetId}/unlike`, data);
};
exports.unlikeTweet = unlikeTweet;
//# sourceMappingURL=tweet_api_util.js.map