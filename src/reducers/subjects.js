import { GET_SUBJECTS, GET_ONE_SUBJECT } from '../actions/subjects'

export function subjects(state = [], action) {
  switch (action.type) {

  case GET_SUBJECTS:
    return action.payload

  default: return state
  }
}

export function subject(state = {}, action) {
  switch (action.type) {

  case GET_ONE_SUBJECT:
    return action.payload

  default: return state
  }
}

