import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'

@injectSheet({
  hashtags: {
    padding: 10
  },
  hashtag: {
    color: '#6f6fe4',
    padding: '5px 7px 3px 7px',
    cursor: 'pointer',
    fontWeight: 600,
    '&:hover': {
      color: '#6f6fe4',
      cursor: 'pointer',
      background: '#eee',
      borderRadius: 3
    },
    '&hover .value': {
      color: '#000'
    }
  },
  value: {
    float: 'right',
    color: '#ccc'
  }
})

class Hashtags extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.hashtags}>
        {['technology', 'deadmau5', 'reddit', 'meta', 'music'].map(ht => {
          return (
            <div className={classes.hashtag}>
            #{ht}
            <span className={classes.value}>{Math.floor(Math.random() * 1500) + 100}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Hashtags