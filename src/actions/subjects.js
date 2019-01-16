import axios from 'axios'

export const GET_SUBJECTS = 'GET_SUBJECTS'

const BASE_URL = process.env.REACT_APP_API_URL

export function getSubjects(teacherId) {
  return dispatch => (
    axios.get(`${BASE_URL}/teachers/${teacherId}/subjects`)
      .then((response) => {
        dispatch({
          type: GET_SUBJECTS,
          payload: response.data
        })
      })
  )
}