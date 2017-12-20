import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  username: {
    display: 'block',
    fontSize: 12,
    color: '#888'
  },
  text: {

  },
  message: {
    padding: 18.5,
    borderBottom: '2px solid #eaeaea'
  }
}

const Message = ({classes, message}) => {
  return (
    <div className={classes.message}>
      <span className={classes.username}>{message.user}</span>
      <span className={classes.text}>{message.text}</span>
    </div>
  )
}

export default injectSheet(styles)(Message)