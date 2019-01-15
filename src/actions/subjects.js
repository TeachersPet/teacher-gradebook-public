import axios from 'axios'

export const GET_SUBJECTS = 'GET_SUBJECTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getSubjects() {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/1/subjects`)
      .then((response) => {
        dispatch({
          type: GET_SUBJECTS,
          payload: response.data
        })
      })
  )
}