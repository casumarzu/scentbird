import App from './containers/App'
import Main from './containers/Main'
import React, { Component } from 'react'
import { Router, IndexRoute, Route } from 'react-router'

export default class Routes extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main } />
          <Route path="/test" component={ Main } />
        </Route>
      </Router>
    )
  }
}
