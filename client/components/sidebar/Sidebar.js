import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import Search from './Search'
import Hashtags from './Hashtags'
import { connect } from 'react-redux'

@injectSheet({
  sidebar: {
    borderRight: '2px solid #eaeaea',
    width: 220,
    padding: 5,
    overflowX: 'scroll'
  }
})

@connect(state => ({
  trending: state.trending
}))

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.sidebar}>
        {/*<Search />*/}
        <Hashtags trending={this.props.trending} />
      </div>
    )
  }
}

export default Sidebar