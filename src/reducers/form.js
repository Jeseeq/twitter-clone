
import { INPUT_CHANGED } from '../actions/form'

const initialState = {
  text: ''
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
  case INPUT_CHANGED:
    return {
    ...state,
    text: action.payload  
  }
  default:
    return state;
  }
}
