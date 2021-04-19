import React, { useState } from "react";
import "./tweet_compose.scss";

const TweetCompose = ({ composeTweet }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = {
      text: text,
    };
    composeTweet(tweet).then(() => setText(""));
  };

  return (
    <form className="tweetcompose" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <textarea
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your tweet..."
        ></textarea>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default TweetCompose;
