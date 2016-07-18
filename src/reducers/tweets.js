
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
  switch (action.type) {
    case ADD_COMMENT:
      if (state.id === action.id) {
        let comment = {
          id: state.comments.length + 1,
          content: action.payload,
          name: action.user,
          time: new Date
        }
        state.comments.push(comment)
        return {
          ...state
        }
      }
    return state
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
      return state.map(t =>
        comment(t, action)
      )
    default:
      return state
  }
}
