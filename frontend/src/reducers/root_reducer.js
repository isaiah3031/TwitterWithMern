import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'
import tweets from './tweet_reducer'
import users from './user_reducer'

const RootReducer = combineReducers({
  session,
  tweets,
  users,
  errors
})

export default RootReducer