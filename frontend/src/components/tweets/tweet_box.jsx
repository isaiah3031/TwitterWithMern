import React from 'react';
import Likes from '../likes/likes'
import './tweet_box.scss'

const TweetBox = ({ tweet }) => {
  const { text, likedBy, user, _id } = tweet

  return (
    <div className='tweetbox'>
      <p className='tweetbox__handle'>{user.handle}</p>
      <p className='tweetbox__body'>{text}</p>
      <Likes tweetId={_id} likedBy={likedBy} />
    </div>
  )
}

export default TweetBox;