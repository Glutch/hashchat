import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import Search from './Search'

@injectSheet({
  sidebar: {
    borderRight: '2px solid #eaeaea',
    width: 300
  }
})

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.sidebar}>
        <Search />
      </div>
    )
  }
}

export default Sidebar