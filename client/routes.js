import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { SplashPage, Login, Signup, Guest, Contacts, Home, SelectSize, Confirmation } from './components'
import { me } from './store';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <Switch>
        {/* Routes placed here are available for everyone */}
        <Route exact path="/" component={isLoggedIn ? Home : SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/selectsize" component={SelectSize} />
        <Route path="/guest" component={Guest} />
        <Route path="/referrals" component={Contacts} />
        <Route path="/confirmation" component={Confirmation} />
        {/* Displays the SplashPage component as a fallback */}
        <Route component={SplashPage} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
