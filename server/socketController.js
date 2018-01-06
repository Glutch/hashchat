const ninjadb = require('ninjadb')
const messages = ninjadb.create('messages')
const usernames = ninjadb.create('usernames')
const hashtags = ninjadb.create('hashtags')
const aliases = usernames.find()

const generateAlias = () => {
  const alias = aliases[Math.floor(Math.random() * aliases.length)].name
  console.log(alias + ' connected')
  return alias
}

const sendAlias = (socket) => {
  socket.emit('alias', socket.alias)
}

const sendTrending = (socket) => {
  socket.emit('trending', hashtags.find())
}

const updateHashtag = (socket) => (hashtag) => {
  if (hashtag !== socket.currentHashtag) {
    socket.leave(socket.currentHashtag)
    socket.join(hashtag)
    socket.currentHashtag = hashtag

    const local = hashtags.find({hashtag})

    if (local) {
      hashtags.update({
        hashtag
      }, {
        value: local.value + 1
      })
    } else {
      hashtags.push({
        hashtag,
        value: 1
      })
    }
  }
}

const createMessage = (socket) => (message) => {
  messages.push({
    user: socket.alias,
    text: message.text,
    hashtag: message.hashtag,
    time: Date.now()
  })
  socket.broadcast.to(socket.currentHashtag).emit('message', message)
}

const getMessages = (socket) => async (hashtag, respond) => {
  const data = await messages.filter({hashtag})
  respond(data)
}

const socketController = io => {
  io.on('connection', socket => {
    socket.alias = generateAlias()
    socket.currentHashtag = 'home'
    generateAlias(socket)
    sendAlias(socket)
    sendTrending(socket)
    socket.on('updateHashtag', updateHashtag(socket))
    socket.on('newMessage', createMessage(socket))
    socket.on('fetchMessages', getMessages(socket))
  })
}

module.exports = socketController