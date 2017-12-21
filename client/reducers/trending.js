const trending = (state = [], action) => {
  switch(action.type){
    case 'UPDATE_TRENDING':
      return action.hashtags

    default:
      return state
  }
}

export default trending