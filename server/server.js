const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const webpack = require('webpack')
const path = require('path')
const open = require('open')
const ninjadb = require('ninjadb')
const messages = ninjadb.create('messages')
const usernames = ninjadb.create('usernames')
const hashtags = ninjadb.create('hashtags')
const aliases = usernames.find()
import config from '../webpack.config'

const port = 4500
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, '../client/index.html'))
})

io.on('connection', socket => {
  let currentHashtag = undefined
  const alias = aliases[Math.floor(Math.random() * aliases.length)]

  socket.emit('alias', alias.name)
  socket.emit('trending', hashtags.find())

  socket.on('updateHashtag', hashtag => {
    if (hashtag) {
      socket.leave(currentHashtag)
      socket.join(hashtag)
      currentHashtag = hashtag

      console.log('updateHashtag: ' + hashtag)

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
  })

  socket.on('newMessage', message => {
    messages.push({
      user: alias.name,
      text: message.text,
      hashtag: message.hashtag,
      time: Date.now()
    })
    socket.broadcast.to(currentHashtag).emit('message', message)
  })

  socket.on('fetchMessages', async (hashtag, respond) => {
    const data = await messages.filter({hashtag})
    console.log('fetchMessages: ' + hashtag)
    console.log(data)
    respond(data)
  })
})

http.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})