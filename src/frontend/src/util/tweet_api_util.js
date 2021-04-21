import axios from 'axios';

export const getTweets = () => {
  return axios.get('/api/tweets')
};

export const getTweet = id => {
  return axios.get(`/api/tweet/${id}`)
}

export const getUserTweets = id => {
  return axios.get(`/api/tweets/user/${id}`)
}

export const writeTweet = data => {
  return axios.post('/api/tweets/', data)
}

export const likeTweet = (tweetId, data) => {
  return axios.patch(`/api/tweets/${tweetId}/like`, data)
}

export const unlikeTweet = (tweetId, data) => {
  return axios.patch(`/api/tweets/${tweetId}/unlike`, data)
}