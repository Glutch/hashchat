import socket from './tools/socket'
import { fetchMessage, fetchMessages } from './actions/messages'
import { receivedUsername } from './actions/user'

export const runLogic = store => {
  store.dispatch(fetchMessages())

  socket.on('alias', username => {
    store.dispatch(receivedUsername(username))
  })

  socket.on('message', message => {
    store.dispatch(fetchMessage(message))
  })
}
