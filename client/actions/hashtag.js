import socket from '../tools/socket'
import { browserHistory } from 'react-router'

export const updateHashtag = hashtag => {
  return dispatch => {
    socket.emit('updateHashtag', hashtag)
    browserHistory.push('/' + hashtag)
    dispatch({type: 'UPDATE_HASHTAG', hashtag})
    socket.emit('fetchMessages', hashtag, messages => {
      dispatch({type: 'FETCH_MESSAGES', messages})
    })
  }
}