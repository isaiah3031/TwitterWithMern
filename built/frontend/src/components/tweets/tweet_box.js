"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const likes_1 = __importDefault(require("../likes/likes"));
require("./tweet_box.scss");
const TweetBox = ({ tweet }) => {
    const { text, likedBy, user, _id } = tweet;
    return (<div className='tweetbox'>
      <p className='tweetbox__handle'>{user.handle}</p>
      <p className='tweetbox__body'>{text}</p>
      <likes_1.default tweetId={_id} likedBy={likedBy}/>
    </div>);
};
exports.default = TweetBox;
//# sourceMappingURL=tweet_box.js.map