import axios from 'axios'

export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getAssignments() {
  return dispatch(
    axios.get(`${BASE_URL}/teachers/:teacherId/subjects/:subjectId/assignments`)
      .then((response) => {
        dispatch({
          type: GET_ASSIGNMENTS,
          payload: response.data
        })
      })
  )
}