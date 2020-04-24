import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Guest} from "./components/guest"
import SplashPage from './components/splash-page'


class Routes extends Component {
  render(){
    return (
    <Switch>
      {/* Routes placed here are available for everyone */}
      {<Route path="/guest" component={Guest} />}

      {/* Displays the SplashPage component as a fallback */}
      <Route component={SplashPage} />
    </Switch>
      )
  }
}

export default Routes
