import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import students from './reducers/students'
import assignments from './reducers/assignments'
<<<<<<< HEAD
=======
import subjects from './reducers/subjects'
import grades from './reducers/grades'
>>>>>>> f12bef7241346c344b0839745b7228d6581090b5

const reducers = combineReducers({ students, assignments, subjects, grades })

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store