import {
  SHOW_MODAL,
  CLOSE_MODAL
} from 'Constants/UI.Constants'

export function showModal(list, open=true) {
  return dispatch => dispatch({
    type: SHOW_MODAL,
    list,
    open
  })
}

export function closeModal(list, open=false) {
  return dispatch => dispatch({
    type: CLOSE_MODAL,
    list,
    open
  })
}
