
import {LOAD_TWEETS, ADD_TWEET, ADD_COMMENT} from '../actions/tweets'



const INITIAL_STATE = [] 

function tweet(state, action) {
  switch (action.type) {
    case ADD_TWEET:
      console.log(state);
      return {
        comments: [],
        id : state.length + 1,
        content : action.payload,
        user : action.user,
        time: new Date
    }
    default: 
      return state
  }
} 
function comment(state, action) {
  switch (ation.type) {
    case ADD_COMMENT:
      return {
      ...state
    }
    default: 
      return state
  }
}
export default function tweets (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TWEETS:
      return [
        ...action.payload
    ]
    case ADD_TWEET:
      return [
        ...state,
        tweet(state, action)
    ]
    case ADD_COMMENT:
      return [
        ...state,
        comment(state, action)
    ]
    default: 
      return state
  }
}
