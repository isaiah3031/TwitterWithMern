import { connect } from 'react-redux'
import { likeTweet, unlikeTweet, fetchTweet } from '../../actions/tweet_actions'
import LikedList from './liked_list'

const mapStateToProps = (state, ownProps) => ({
  likedBy: ownProps.likedBy,
  tweetId: ownProps.tweetId,
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  likeTweet: (tweetId, userId) => dispatch(likeTweet(tweetId, userId)),
  unlikeTweet: (tweetId, userId) => dispatch(unlikeTweet(tweetId, userId)),
  fetchTweet: id => dispatch(fetchTweet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LikedList)