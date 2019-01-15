import { GET_ASSIGNMENTS } from '../actions/assignments'

function assignments(state = [], action) {
    switch (action.type) {
        case GET_ASSIGNMENTS:
            return action.payload

        default: return state
    }
}

export default assignments