// Get the reducers then combine them
import { combineReducers } from 'redux'
import history from './history'
import shoortstate from './shoortstate'

const reducer = combineReducers({
  history,
  shoortstate
})

export default reducer
