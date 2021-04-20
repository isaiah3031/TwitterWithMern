import React from 'react';
import LikeButtonContainer from './like_button_container'

const Likes = ({ likedBy, tweetId }) => {
  const likeCount = likedBy ? likedBy.length : 0

  return <>
    <p>
      <LikeButtonContainer likedBy={likedBy} tweetId={tweetId} />
      {likeCount}
    </p>
    {likeCount > 0 && likedBy.map(user => <p>{user.handle}</p>)}
  </>
}

export default Likes