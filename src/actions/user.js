export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'

export function login(username) {
  return {
    type: LOGIN,
    payload: username
  }
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
export function logout() {
  return {
    type: LOGOUT
  }
}
