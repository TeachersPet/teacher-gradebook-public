import { GET_ASSIGNMENTS, GET_ONE_ASSIGNMENT } from '../actions/assignments'


function assignments(state = [], action) {
    switch (action.type) {
        case GET_ASSIGNMENTS:
            return action.payload
        case GET_ONE_ASSIGNMENT:
            return action.payload

    default: return state
  }
}

export default assignments
