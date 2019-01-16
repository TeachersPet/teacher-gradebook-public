import { GET_ASSIGNMENTS, GET_ONE_ASSIGNMENT, GET_ONE_STUDENTS_ASSIGNMENTS } from '../actions/assignments'


export function assignments(state = [], action) {
    switch (action.type) {
        case GET_ASSIGNMENTS:
            return action.payload

        case GET_ONE_ASSIGNMENT:
            return action.payload

        default: return state
    }
}

export function assignmentsPerSubject(state = {}, action) {
    switch (action.type) {
        case GET_ONE_STUDENTS_ASSIGNMENTS:
            return {...state, [action.subjectId]: action.payload}

        default: return state
    }
}
