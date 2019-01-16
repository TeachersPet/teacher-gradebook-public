import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

export function getAssignments(teacherId, subjectId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`)
      .then((response) => {
        dispatch({
          type: GET_ASSIGNMENTS,
          payload: response.data
        })
      })
      .catch(() => console.log('could not get assignments'))
  )
}

export const GET_ONE_STUDENTS_ASSIGNMENTS = 'GET_ONE_STUDENTS_ASSIGNMENTS'

export function getOneStudentsAssignments(teacherId, subjectId, studentId) {
  return dispatch => {
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments?student=${studentId}`)
    .then( (response) => {
      dispatch({
        type: GET_ONE_STUDENTS_ASSIGNMENTS,
        payload: response.data,
        subjectId
      })
    })
    .catch(() => console.log('could not get assignments'))
  }
}

export const GET_ONE_ASSIGNMENT = 'GET_ONE_ASSIGNMENT'

export function getOneAssignment(teacherId, subjectId, assignmentId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`)
      .then((response) => {
        dispatch({
          type: GET_ONE_ASSIGNMENT,
          payload: response.data
        })
      })
      .catch(() => console.log('could not get 1 assignment'))
  )
}

export function deleteAssignment(teacherId, subjectId, assignmentId) {
  return(dispatch) => {
      console.log(`DEEEELEEEEEEEEEEEEEEEEEEEETING ${assignmentId}`)
      axios.delete(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`)
      .then( () => {
          dispatch(getAssignments(teacherId, subjectId))
      })
      .catch(() => console.log('could not delete assignment.'))
  }
}

export function postAssignment(teacherId, subjectId, newAssignment) {
  console.log(teacherId)
  return dispatch => {
    axios.post(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`, newAssignment)
      .then(() => {
        dispatch(
          getAssignments(teacherId, subjectId)
        )
      })
  }
}
