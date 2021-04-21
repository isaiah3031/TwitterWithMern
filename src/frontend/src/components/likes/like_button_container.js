import { connect } from 'react-redux'
import LikeButton from './like_button'
import { likeTweet, unlikeTweet } from '../../actions/tweet_actions'

const mapStateToProps = (state, ownProps) => ({
  likeBy: ownProps.likedBy,
  currentUser: state.session.user,
  tweetId: ownProps.tweetId,
})

const mapDispatchToProps = dispatch => ({
  likeTweet: (tweetId, userId) => dispatch(likeTweet(tweetId, userId)),
  unlikeTweet: (tweetId, userId) => dispatch(unlikeTweet(tweetId, userId))
})

const LikeButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton)

export default LikeButtonContainer;