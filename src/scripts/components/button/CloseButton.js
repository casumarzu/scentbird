import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import CloseButtonStyle from './CloseButton.scss'
import InfoModal from 'Components/modal/InfoModal'

export default class Button extends Component {
  onClick() {
    const {onClick} = this.props
    onClick()
  }

  render() {
    return (
      <div className="close-button__container">
        <div className="close-button" onClick={::this.onClick}></div>
      </div>
    )
  }
}
