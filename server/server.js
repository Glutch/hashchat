const express   = require('express')
const app       = express()
const http      = require('http').Server(app)
const io        = require('socket.io')(http)
import webpack from 'webpack'
import path from 'path'
import config from '../webpack.config'
import open from 'open'
import ninjadb from 'ninjadb'
const messages = ninjadb.create('messages')
const usernames = ninjadb.create('usernames')
const aliases = usernames.find()

/* eslint-disable no-console */

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
  const alias = aliases[Math.floor(Math.random() * aliases.length)]

  socket.emit('alias', alias.name)

  socket.on('newMessage', message => {
    messages.push({
      user: alias.name,
      text: message.text,
      time: Date.now()
    })
    socket.broadcast.emit('message', message)
  })

  socket.on('fetchMessages', async ({}, respond) => {
    const data = await messages.find()
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