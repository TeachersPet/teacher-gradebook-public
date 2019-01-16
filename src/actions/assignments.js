import axios from 'axios'

export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

const BASE_URL = process.env.REACT_APP_API_URL

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
      axios.delete(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`)
      .then( () => {
          dispatch(getAssignments(teacherId, subjectId))
      })
      .catch(() => console.log('could not delete assignment.'))
  }
}

export function postAssignment(teacherId, subjectId, newAssignment) {
  return dispatch => {
    axios.post(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`, newAssignment)
      .then(() => {
        dispatch(
          getAssignments(teacherId, subjectId)
        )
      })
  }
}

export function updateAssignment(teacherId, subjectId, assignmentId) {
  return(dispatch) => {
    axios.put(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`)
      .then(()=> { 
        dispatch(getAssignments(teacherId, subjectId)
      )
    })
  }
}
