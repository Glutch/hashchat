import React from 'react'
import { Link } from 'react-router'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import * as hashtagActions from '../../actions/hashtag'
import ColorHash from 'color-hash'

const colorHash = new ColorHash()

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

@connect(state => ({}), {
  updateHashtag: hashtagActions.updateHashtag
})

class Hashtags extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.hashtags}>
        {this.props.trending.sort((a, b) => b.value - a.value).map(ht => {
          return (
            <div onClick={() => {this.props.updateHashtag(ht.hashtag)}} className={classes.hashtag}>
              <span style={{color: colorHash.hex(ht.hashtag)}}>#{ht.hashtag}</span>
              <span className={classes.value}>{ht.value}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Hashtags