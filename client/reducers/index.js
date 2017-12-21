import { combineReducers } from 'redux'
import messages from './messages'
import user from './user'
import hashtag from './hashtag'
import trending from './trending'

const reducer = combineReducers({
  messages,
  user,
  hashtag,
  trending
})

export default reducer