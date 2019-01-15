import {GET_STUDENTS} from '../actions/students'

function students(state = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.payload

        default: return state
    }
}


export default students