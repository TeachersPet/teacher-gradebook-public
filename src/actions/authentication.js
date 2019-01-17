export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'

export const setAuthentication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
})