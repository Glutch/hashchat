import React from 'react'
import injectSheet from 'react-jss'
import ColorHash from 'color-hash'

const colorHash = new ColorHash()

const styles = {
  username: {
    display: 'block',
    fontSize: 12
  },
  message: {
    padding: 18.5,
    borderBottom: '2px solid #eaeaea'
  }
}

const Message = ({classes, message}) => {
  return (
    <div className={classes.message}>
      <span
        className={classes.username}
        style={{color: colorHash.hex(message.user)}}>
        {message.user}
      </span>
      <span className={classes.text}>{message.text}</span>
    </div>
  )
}

export default injectSheet(styles)(Message)