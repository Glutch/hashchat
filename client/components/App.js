import React, { PropTypes } from 'react'
import injectSheet from 'react-jss'
//import Header from './common/Header'

const styles = {
  content: {
    padding: 20
  }
}

class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(App)