import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  )
}

export default configureStore