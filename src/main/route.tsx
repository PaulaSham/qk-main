import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/one">
          <div>One</div>
        </Route>
        <Route path="/two">
          <div>Two</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter
