import { GET_SUBJECTS } from '../actions/subjects'

function subjects(state = [], action) {
  switch (action.type) {
    
    case GET_SUBJECTS:
      return action.payload

    default: return state
  }
}

export default subjects