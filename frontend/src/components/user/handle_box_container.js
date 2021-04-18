import { connect } from 'react-redux';
import HandleBox from './handle_box'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HandleBox)