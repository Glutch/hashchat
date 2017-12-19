import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'

@injectSheet({
  search: {
    border: 0,
    borderBottom: '2px solid #eaeaea',
    width: '100%',
    padding: 18,
    fontSize: 15
  }
})

class Search extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <input placeholder="Search" className={classes.search}/>
    )
  }
}

export default Search