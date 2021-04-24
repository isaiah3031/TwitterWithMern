"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LikeButton = ({ likedBy, tweetId, likeTweet, unlikeTweet, currentUser }) => {
    const isLiked = likedBy.filter(user => user._id != currentUser.id).length > 0;
    const handleLikeFunction = () => {
        if (isLiked) {
            unlikeTweet(tweetId, currentUser.id);
        }
        else {
            likeTweet(tweetId, currentUser.id);
        }
    };
    return <button onClick={() => handleLikeFunction()}>
    {isLiked ? 'unLike' : 'Like'}
  </button>;
};
exports.default = LikeButton;
//# sourceMappingURL=like_button.js.map