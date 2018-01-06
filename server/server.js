const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const webpack = require('webpack')
const path = require('path')
const open = require('open')
const config = require('../webpack.config')
const socketController = require('./socketController')

const port = 5000
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join( __dirname, '../client/index.html'))
})

socketController(io)

http.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})