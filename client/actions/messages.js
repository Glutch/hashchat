import socket from '../tools/socket'

export const newMessage = message => {
  return dispatch => {
    socket.emit('newMessage', message)
    dispatch({type: 'NEW_MESSAGE', message})
  }
}

export const fetchMessage = message => {
  return {
    type: 'FETCH_MESSAGE',
    message
  }
}

export const fetchMessages = hashtag => {
  return dispatch => {
    socket.emit('fetchMessages', hashtag, messages => {
      dispatch({
        type: 'FETCH_MESSAGES',
        messages
      })
    })
  }
}