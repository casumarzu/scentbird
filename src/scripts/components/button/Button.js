import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import ButtonStyle from './Button.scss'
import InfoModal from 'Components/modal/InfoModal'

export default class Button extends Component {
  onClick() {
    const {onClick} = this.props
    onClick()
  }

  render() {
    return (
      <div className="flat-button__container">
        <button
          className="flat-button"
          onClick={::this.onClick}
        >{this.props.children}</button>
      </div>
    )
  }
}
