import React from 'react'
import injectSheet from 'react-jss'
import Sidebar from './sidebar/Sidebar'

@injectSheet({
  box: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Proxima Nova'
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.box}>
        <Sidebar />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App