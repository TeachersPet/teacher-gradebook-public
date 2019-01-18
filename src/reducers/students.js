import { GET_STUDENTS, GET_ONE_STUDENT } from '../actions/students'

export function students(state = [], action) {
  switch (action.type) {
  case GET_STUDENTS:
    return action.payload

  default: return state
  }
}

export function student(state={}, action ) {
  switch (action.type) {
  case GET_ONE_STUDENT:
    return action.payload

  default: return state
  }
}

export default students