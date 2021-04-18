import React from 'react';
import LikedListContainer from './liked_list_container'
import HandleBoxContainer from '../user/handle_box_container'

const TweetBox = ({ tweet }) => {
  const { text, likedBy, user, _id } = tweet

  return (
    <div>
      <HandleBoxContainer id={user} />
      <h3>{text}</h3>
      <LikedListContainer tweetId={_id} likedBy={likedBy} />
    </div>
  )
}

export default TweetBox;