import React, { useEffect } from 'react';
import { withRouter } from './tweet_box';
import TweetBox from './tweet_box';

const Tweets = ({ tweetList, fetchTweets }) => {
  useEffect(() => {
    fetchTweets()
  }, [])

  if (tweetList.length === 0) {
    return (<div>There are no tweets</div>)
  } else {
    return (
      <>
        <h2>All Tweets</h2>
        { tweetList.map(tweet => {
          return <TweetBox
            key={tweet._id}
            tweet={tweet}
          />
        }
        )}
      </>
    )
  }
}

export default Tweets;