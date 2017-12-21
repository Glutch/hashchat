import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import Message from './Message'

@injectSheet({
  chat: {
    height: 'calc(100vh - 60px)',
    width: 'calc(100vw - 220px)',
    overflowY: 'scroll',
    '& div:last-child': {
      borderBottom: 0
    }
  }
})

@connect(state => ({
  messages: state.messages
}))

class Chat extends React.Component {
  componentDidUpdate(){
    this.refs.chatBox.scrollTop = this.refs.chatBox.scrollHeight
  }
  render() {
    const { classes } = this.props
    return (
      <div ref='chatBox' className={classes.chat}>
        {this.props.messages.map((message, i) => {
          return <Message key={i} message={message} />
        })}
      </div>
    )
  }
}

export default Chat