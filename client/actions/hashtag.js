import socket from '../tools/socket'


export const updateHashtag = hashtag => {
  return dispatch => {
    socket.emit('updateHashtag', hashtag)
    dispatch({type: 'UPDATE_HASHTAG', hashtag})
    socket.emit('fetchMessages', hashtag, messages => {
      dispatch({type: 'FETCH_MESSAGES', messages})
    })
  }
}