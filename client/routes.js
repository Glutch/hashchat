import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Window from './components/chat/Window'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Window} />
  </Route>
)