import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import * as messagesActions from '../../actions/messages'

@injectSheet({
  chat: {
    height: 'calc(100vh - 60px)',
    width: 'calc(100vw - 300px)',
    overflowY: 'scroll'
  },
  message: {
    padding: 18.5,
    borderBottom: '2px solid #eaeaea'
  }
})

@connect(state => ({
  messages: state.messages
}))

class Chat extends React.Component {

  generateMessages = (message, index) => {
    const { classes } = this.props
    return <div key={index} className={classes.message}>{message.text}</div>
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.chat}>
        {this.props.messages.map(this.generateMessages)}
      </div>
    )
  }
}

export default Chat