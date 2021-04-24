"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const like_button_container_1 = __importDefault(require("./like_button_container"));
const Likes = ({ likedBy, tweetId }) => {
    const likeCount = likedBy ? likedBy.length : 0;
    return <>
    <p>
      <like_button_container_1.default likedBy={likedBy} tweetId={tweetId}/>
      {likeCount}
    </p>
    {likeCount > 0 && likedBy.map(user => <p>{user.handle}</p>)}
  </>;
};
exports.default = Likes;
//# sourceMappingURL=likes.js.map