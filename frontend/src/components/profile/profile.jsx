import React, { useEffect } from 'react';
import TweetBox from '../tweets/tweet_box';
import '../tweets/tweets.scss'

const Profile = ({ fetchUserTweets, tweets, currentUser }) => {
  useEffect(() => {
    fetchUserTweets(currentUser.id)
  }, [])
  
  if (tweets.length === 0) {
    return (<div>This user has no Tweets</div>)
  } else {
    return (
      <div className='tweets'>
        <h2>All of This User's Tweets</h2>
        {tweets.map(tweet => (
          <TweetBox key={tweet._id} tweet={tweet} />
        ))}
      </div>
    )
  }
}

export default Profile;