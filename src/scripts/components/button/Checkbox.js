import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import mui from 'material-ui'
import CheckboxStyle from './Checkbox.scss'

export default class Button extends Component {
  onChange(event) {
    const {onChange} = this.props
    onChange(event)
  }

  render() {
    return (
      <label className="b-check-item">
        <input type="checkbox" onChange={::this.onChange} />
        <div className="e-check"></div>
        <p>{this.props.children}</p>
      </label>
    )
  }
}
