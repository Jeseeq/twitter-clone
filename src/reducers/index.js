import { combineReducers } from 'redux'
import user from './user'
import tweets from './tweets'

const rootReducer = combineReducers({
  user,
  tweets
})

export default rootReducer
