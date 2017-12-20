import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import risi from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, risi())
  )
}

export default configureStore