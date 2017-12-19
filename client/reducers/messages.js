const messages = (state = [], action) => {
  switch(action.type){
    case 'NEW_MESSAGE':
      return [...state, Object.assign({}, action.text)]

    default:
      return state
  }
}

export default messages