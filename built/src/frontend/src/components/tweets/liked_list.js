"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const handle_box_container_1 = __importDefault(require("../user/handle_box_container"));
const LikedList = ({ likedBy, tweetId, likeTweet, unlikeTweet, currentUser, fetchTweet }) => {
    const likeCount = likedBy ? likedBy.length : 0;
    const { id, handle } = currentUser;
    const isLiked = likedBy.includes(id);
    const handleLikeFunction = () => {
        if (isLiked) {
            unlikeTweet(tweetId, id);
        }
        else {
            likeTweet(tweetId, id);
        }
    };
    return <>
    <p>
      <button onClick={() => handleLikeFunction()}>{isLiked ? 'unLike' : 'Like'}</button> {likeCount}</p>
    {likeCount > 0 && likedBy.map(likeObj => <handle_box_container_1.default id={id}/>)}
  </>;
};
exports.default = LikedList;
//# sourceMappingURL=liked_list.js.map