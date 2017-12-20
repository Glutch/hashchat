import { combineReducers } from 'redux'
import messages from './messages'
import user from './user'
import hashtag from './hashtag'

const reducer = combineReducers({
  messages,
  user,
  hashtag
})

export default reducer