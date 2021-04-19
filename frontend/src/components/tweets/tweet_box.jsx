import React from 'react';
import LikedListContainer from './liked_list_container'
import HandleBoxContainer from '../user/handle_box_container'
import './tweet_box.scss'

const TweetBox = ({ tweet }) => {
  const { text, likedBy, user, _id } = tweet

  return (
    <div className='tweetbox'>
      <p className='tweetbox__handle'>{user.handle}</p>
      <p className='tweetbox__body'>{text}</p>
      <LikedListContainer tweetId={_id} likedBy={likedBy} />
    </div>
  )
}

export default TweetBox;