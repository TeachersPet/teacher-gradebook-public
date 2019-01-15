import axios from 'axios'

export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getAssignments() {
  return dispatch => (
    axios.get(`http://localhost:3000/teachers/1/subjects/3/assignments`)
      .then((response) => {
        dispatch({
          type: GET_ASSIGNMENTS,
          payload: response.data
        })
      })
  )
}