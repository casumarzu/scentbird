import _ from 'lodash'
import {
  SHOW_MODAL,
  CLOSE_MODAL
} from 'Constants/UI.Constants'

const initialState = {
  list: [],
  open: false
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, list: action.list, open: action.open}
    case CLOSE_MODAL:
      return { ...state, list: action.list, open: action.open}
    default:
      return state;
  }
}
