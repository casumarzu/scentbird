import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DevTools from 'Containers/DevTools'
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { muiStyle } from 'Scripts/config'
const muiTheme = getMuiTheme(muiStyle)
import 'Styles/index.scss'

export default class App extends Component {
  componentWillMount() {}

  render() {
    let DevToolsNode = ''
    if(process.env.NODE_ENV === 'development' && !window.devToolsExtension) {
      DevToolsNode = <DevTools />
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            {this.props.children}
          </div>
          {DevToolsNode}
        </div>
      </MuiThemeProvider>
    )
  }
}
