import axios from 'axios'
import {attachHeader} from './assignments'


const BASE_URL = process.env.REACT_APP_API_URL

export const GET_SUBJECTS = 'GET_SUBJECTS'

export function getSubjects(teacherId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects`, attachHeader())
      .then((response) => {
        dispatch({
          type: GET_SUBJECTS,
          payload: response.data
        })
      })
  )
}

export const GET_ONE_SUBJECT = 'GET_ONE_SUBJECT'

export function getOneSubject(teacherId, subjectId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}`, attachHeader())
      .then((response) => {
        dispatch({
          type: GET_ONE_SUBJECT,
          payload: response.data
        })
      })
  )
}