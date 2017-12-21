import socket from './tools/socket'
import { fetchMessage, fetchMessages } from './actions/messages'
import { receivedUsername } from './actions/user'
import { updateTrending } from './actions/trending'
import { updateHashtag } from './actions/hashtag'
import { browserHistory } from 'react-router'

export const runLogic = store => {
  const hashtag = window.location.pathname.replace('/', '')
  if (hashtag != ''){
    store.dispatch(updateHashtag(hashtag))
  } else {
    store.dispatch(updateHashtag('home'))
  }

  socket.on('alias', username => {
    store.dispatch(receivedUsername(username))
    console.log(username)
  })

  socket.on('message', message => {
    store.dispatch(fetchMessage(message))
  })

  socket.on('trending', hashtags => {
    store.dispatch(updateTrending(hashtags))
  })
}
