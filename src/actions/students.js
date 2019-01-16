import axios from 'axios'

export const GET_STUDENTS = 'GET_STUDENTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getStudents(teacherId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/students`)
      .then((response) => {
        dispatch({
          type: GET_STUDENTS,
          payload: response.data
        })
      })
  )
}

export const GET_ONE_STUDENT = 'GET_ONE_STUDENT'

export function getOneStudent(teacherId, studentId) {
  return dispatch => {
    axios.get(`${BASE_URL}/teachers/${teacherId}/students/${studentId}`)
    .then((response) => {
      dispatch({
        type: GET_ONE_STUDENT,
        payload: response.data
      })
    })
  }
}