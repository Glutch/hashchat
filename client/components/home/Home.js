import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'

const styles = {
  home: {
    background: '#fafafa',
    padding: 20
  }
}

class Home extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.home}>
        <h1>Home</h1>
      </div>
    )
  }
}

export default injectSheet(styles)(Home)