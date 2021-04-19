"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const liked_list_container_1 = __importDefault(require("./liked_list_container"));
const handle_box_container_1 = __importDefault(require("../user/handle_box_container"));
const TweetBox = ({ tweet }) => {
    const { text, likedBy, user, _id } = tweet;
    return (<div>
      <handle_box_container_1.default id={user}/>
      <h3>{text}</h3>
      <liked_list_container_1.default tweetId={_id} likedBy={likedBy}/>
    </div>);
};
exports.default = TweetBox;
//# sourceMappingURL=tweet_box.js.map