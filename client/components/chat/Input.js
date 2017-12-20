import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import * as messagesActions from '../../actions/messages'
import * as hashtagActions from '../../actions/hashtag'
import matchHashtags from '../../tools/matchHashtags'

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
  user: state.user,
  hashtag: state.hashtag
}), {
  newMessage: messagesActions.newMessage,
  updateHashtag: hashtagActions.updateHashtag
})

class Input extends React.Component {
  state = {
    message: {
      text: ''
    }
  }

  onTyping = evt => {
    const message = this.state.message
    message.text = evt.target.value
    this.setState({message})

  }

  onSubmit = evt => {
    const message = this.state.message
    if (evt.key === 'Enter') {
      if (message.text != '') {
        message.user = this.props.user
        this.props.newMessage(message)
        message.text = ''
        this.setState({message})
      }
    }
    if (evt.key === ' ') {
      this.props.updateHashtag(matchHashtags(message.text))
      message.text = ''
      this.setState({message})
    }
  }

  render() {
    const { classes } = this.props
    return (
      <input value={this.state.message.text}
        onChange={this.onTyping}
        onKeyPress={this.onSubmit}
        placeholder={`Write a message to #${this.props.hashtag}, ${this.props.user}`}
        className={classes.input}/>
    )
  }
}

export default Input