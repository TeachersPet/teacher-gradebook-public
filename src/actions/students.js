import axios from 'axios'

export const GET_STUDENTS = 'GET_STUDENTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getStudents() {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/1/subjects/1/students`)
      .then((response) => {
        dispatch({
          type: GET_STUDENTS,
          payload: response.data
        })
      })
  )
}