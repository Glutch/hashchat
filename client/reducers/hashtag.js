const hashtag = (state = [], action) => {
  switch(action.type){
    case 'UPDATE_HASHTAG':
      return action.hashtag

    default:
      return state
  }
}

export default hashtag