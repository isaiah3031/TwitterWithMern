import React, { useEffect } from 'react';
import TweetBox from '../tweets/tweet_box';
import TweetComposeContainer from '../tweets/tweet_compose_container'
import '../tweets/tweets.scss'

const Feed = ({ tweetList, fetchTweets }) => {
  useEffect(() => {
    fetchTweets()
  }, [])

  if (tweetList.length === 0) {
    return (
      <div>There are no tweets</div>
    )
  }

  return (
    <div className='tweets'>
      <h2>All Tweets</h2>
      <TweetComposeContainer />
      {
        tweetList.map(tweet => {
          return <TweetBox
            key={tweet._id}
            tweet={tweet}
          />
        }
        )}
    </div>
  )
}

export default Feed;