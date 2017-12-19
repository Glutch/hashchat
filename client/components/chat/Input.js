import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import * as messagesActions from '../../actions/messages'

@injectSheet({
  input: {
    height: 60,
    width: '100%',
    border: 0,
    borderTop: '2px solid #eaeaea',
    padding: '0px 18px',
    fontSize: 14
  }
})

@connect(state => ({
  messages: state.messages
}), {
  newMessage: messagesActions.newMessage
})

class Input extends React.Component {
  state = {
    message: { text: '' }
  }

  onTyping = evt => {
    const message = this.state.message
    message.text = evt.target.value
    this.setState({message})
  }

  onSubmit = evt => {
    if (evt.key === 'Enter') {
      const message = this.state.message
      if (message.text != '') {
        this.props.newMessage(message)
        message.text = ''
        this.setState({message})
      }
    }
  }

  render() {
    const { classes } = this.props
    return (
      <input value={this.state.message.text}
        onChange={this.onTyping}
        onKeyPress={this.onSubmit}
        placeholder="Write a message"
        className={classes.input}/>
    )
  }
}

export default Input