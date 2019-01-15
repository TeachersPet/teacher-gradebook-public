import axios from 'axios'


export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getAssignments(teacherId, subjectId) {
  console.log('starting to get aLL assignments')
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`)
      .then((response) => {
        console.log(`dispatching aLL assignments`)
        dispatch({
          type: GET_ASSIGNMENTS,
          payload: response.data
        })
      })
      .catch(() => console.log('could not get assignments'))
  )
}

export const GET_ONE_ASSIGNMENT = 'GET_ONE_ASSIGNMENT'

export function getOneAssignment(teacherId, subjectId, assignmentId) {
  console.log('starting to get 1 assignment')
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`)
      .then((response) => {
        console.log('dispatching assignment')
        dispatch({
          type: GET_ONE_ASSIGNMENT,
          payload: response.data
        })
      })
      .catch(() => console.log('could not get 1 assignment'))
  )
}