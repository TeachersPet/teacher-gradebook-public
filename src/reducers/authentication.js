import { SET_AUTHENTICATION } from '../actions/authentication'

const AUTHENTICATION_INITIAL_STATE = {
  user: null,
  pending: true
}

export const authentication = (state = AUTHENTICATION_INITIAL_STATE, action) => {
  switch(action.type){
    case SET_AUTHENTICATION: 
      return {user: action.payload, pending: false}
    default:
      return state
  }
}