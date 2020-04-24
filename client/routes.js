import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
// import {HomePage} from "/component/user-home"
// import {Refer} from "/component/refer"
import SplashPage from './components/splash-page'

class Routes extends Component {
  render(){
    return (
    <Switch>
      {/* Routes placed here are available upon login */}
      {/* <Route path="/homepage" component={HomePage} />
      <Route path="/refer" component={Refer} /> */}

      {/* Displays the SplashPage component as a fallback */}
      <Route component={SplashPage} />
    </Switch>
      )
  }
}

export default Routes
