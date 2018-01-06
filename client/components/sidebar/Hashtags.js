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
    borderRadius: 3,
    cursor: 'pointer',
    marginTop: 1,
    '&:hover': {
      background: '#eee'
    },
    '&hover .value': {
      color: '#000'
    }
  },
  chosen: {
    background: '#eee'
  },
  value: {
    float: 'right',
    color: '#ccc'
  }
})

@connect(state => ({
  currHashtag: state.hashtag
}), {
  updateHashtag: hashtagActions.updateHashtag
})

class Hashtags extends React.Component {
  render() {
    const { classes, currHashtag, trending, updateHashtag } = this.props
    const views = trending.length > 0 ? trending.find(a => a.hashtag === currHashtag).value : 0
    const hashtags = [...this.props.trending].sort((a, b) => b.value - a.value)
    return (
      <div className={classes.hashtags}>

        <div className={classes.hashtag + ' ' + classes.chosen}>
          <span style={{color: colorHash.hex(currHashtag)}}>#{currHashtag}</span>
          <span className={classes.value}>{views}</span>
        </div>

        {hashtags.map((ht, i) => {
          return (
            <div key={i} onClick={() => {updateHashtag(ht.hashtag)}} className={classes.hashtag}>
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