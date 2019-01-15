import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import students from './reducers/students'
import assignments from './reducers/assignments'

const reducers = combineReducers({ students, assignments})

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store