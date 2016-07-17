import { combineReducers } from 'redux'
import user from './user'
import tweets from './tweets'
import form from './form'
const rootReducer = combineReducers({
  user,
  tweets,
  form
})

export default rootReducer
