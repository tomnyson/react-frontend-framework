
import { combineReducers } from 'redux'
import countReducer from './slices/cout.slice'
import userReducer from './slices/user.slide'

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer
})

export default rootReducer