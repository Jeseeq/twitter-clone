import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/user'


const INITIAL_STATE = {
  user: null,
  status: null,
  error: null,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
    ...state,
    user: action.payload,
    status: 'signinig',
    error: null
  }
  case LOGIN_FAILURE: 
    return {
    ...state,
    user: null,
    status: 'error',
    error: action.payload
  }
  case LOGOUT:
    return {
    ...state,
    user: null,
    status: null,
    error: null
  }
  default:
    return state
  }
}
