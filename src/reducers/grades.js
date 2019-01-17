
import { ADD_GRADES } from '../actions/grades'

function grades(state = [], action) {
   switch (action.type) {

       case ADD_GRADES:
         const newState = state
         return [...newState, action.payload]

       default: return state
   }
}

export default grades