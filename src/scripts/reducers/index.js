import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import ui from './UI.Reducer'

export default combineReducers({
  ui,
  routing
})
