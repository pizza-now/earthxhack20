import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { SplashPage, Login, Signup, Guest, Contacts } from './components'
import { me } from './store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <Switch>
        {/* Routes placed here are available for everyone */}
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/guest" component={Guest} />
        <Route path="/referrals" component={Contacts} />
        {/* Displays the SplashPage component as a fallback */}
        <Route component={SplashPage} />
      </Switch>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};