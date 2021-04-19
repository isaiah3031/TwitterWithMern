import React, { useEffect } from 'react';
import TweetBox from './tweet_box';
import TweetComposeContainer from './tweet_compose_container'
import './tweets.scss'

const Tweets = ({ tweetList, fetchTweets }) => {
  useEffect(() => {
    fetchTweets()
  }, [])

  if (tweetList.length === 0) return (<div>There are no tweets</div>)

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

export default Tweets;