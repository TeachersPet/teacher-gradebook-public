import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { students, student } from './reducers/students'
import { assignments } from './reducers/assignments'
import { assignmentsPerSubject } from './reducers/assignments'
import { subjects, subject } from './reducers/subjects'
import { authentication } from './reducers/authentication'

const reducers = combineReducers({ students, student, assignments, assignmentsPerSubject, subjects, subject, authentication })

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store