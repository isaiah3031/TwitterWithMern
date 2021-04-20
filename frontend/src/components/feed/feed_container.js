import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import Feed from './feed';

const mapStateToProps = state => ({
  tweetList: Object.values(state.tweets.all)
})

const mapDispatchToProps = dispatch => ({
  fetchTweets: () => dispatch(fetchTweets())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)