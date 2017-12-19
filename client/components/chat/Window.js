import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import Input from './Input'
import Chat from './Chat'

@injectSheet({
  window: {}
})

class Window extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.window}>
        <Chat />
        <Input />
      </div>
    )
  }
}

export default Window