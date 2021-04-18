import React, { useEffect } from 'react';
import { getTweet } from '../../util/tweet_api_util';
import HandleBoxContainer from '../user/handle_box_container'

const LikedList = ({ likedBy, tweetId, likeTweet, unlikeTweet, currentUser, fetchTweet }) => {
  const likeCount = likedBy ? likedBy.length : 0
  const { id, handle } = currentUser
  const isLiked = likedBy.includes(id)

  const handleLikeFunction = () => {
    if (isLiked) {
      unlikeTweet(tweetId, id)
    } else {
      likeTweet(tweetId, id)
    }
  }

  return <>
    <p>
      <button onClick={() => handleLikeFunction()}>{isLiked ? 'unLike' : 'Like'}</button> {likeCount}</p>
    {likeCount > 0 && likedBy.map(likeObj => <HandleBoxContainer id={id} />)}
  </>
}

export default LikedList