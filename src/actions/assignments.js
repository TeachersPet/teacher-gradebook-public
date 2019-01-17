import axios from 'axios'

export const attachHeader = () => {
  let bearer = ''
  const token = localStorage.getItem('token')
  if (token) bearer = `Bearer ${token}`

  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearer
    }
  }
}

const BASE_URL = process.env.REACT_APP_API_URL

export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

export function getAssignments(teacherId, subjectId) {

  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`, attachHeader())
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
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments?student=${studentId}`, attachHeader())
    .then( (response) => {
      dispatch({
        type: GET_ONE_STUDENTS_ASSIGNMENTS,
        payload: response.data,
        subjectId
      })
    })
    .catch(() => console.log('Assignment Could Not Be Retrieved'))
  }
}

export const GET_ONE_ASSIGNMENT = 'GET_ONE_ASSIGNMENT'

export function getOneAssignment(teacherId, subjectId, assignmentId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`, attachHeader())
      .then((response) => {
        dispatch({
          type: GET_ONE_ASSIGNMENT,
          payload: response.data
        })
      })
      .catch(() => console.log('Could Not Find The Requested Assignment'))
  )
}

export function deleteAssignment(teacherId, subjectId, assignmentId) {
  return(dispatch) => {
      axios.delete(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`, attachHeader())
      .then( () => {
          dispatch(getAssignments(teacherId, subjectId))
      })
      .catch(() => console.log('Assignment Could Not Be Deleted'))
  }
}

export function postAssignment(teacherId, subjectId, newAssignment) {
  return dispatch => {
    axios.post(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments`, newAssignment, attachHeader())
      .then(() => {
        dispatch(
          getAssignments(teacherId, subjectId)
        )
      })
  }
}

export function updateAssignment(teacherId, subjectId, assignmentId, editedAssignment) {
  return dispatch => {
    axios.put(`${BASE_URL}/teachers/${teacherId}/subjects/${subjectId}/assignments/${assignmentId}`, editedAssignment, attachHeader())
      .then(()=> { 
        dispatch(getAssignments(teacherId, subjectId)
      )
    })
  }
}

