const user = (state = [], action) => {
  switch(action.type){
    case 'RECEIVED_USERNAME':
      return action.username

    default:
      return state
  }
}

export default user