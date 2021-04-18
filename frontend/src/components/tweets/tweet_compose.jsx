
import React, { useState, useEffect } from 'react';

const TweetCompose = ({ composeTweet }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = {
      "text": text
    };
    composeTweet(tweet).then(() => setText(''));
  }

  return (
    <div>
      <form className='tweet_compose' onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input type="textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write your tweet..."
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default TweetCompose;