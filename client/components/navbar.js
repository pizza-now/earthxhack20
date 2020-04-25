import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className="nav-container">
          <Link to='/home'>
          <div className="nav-logo">
            <img src={'/assets/pizza-now.png'} alt="logo" className="logo"/>
          </div>
        </Link>
        <nav className="navbar-links">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/referrals">Refer A Friend</Link>
          <a href="#" onClick={handleClick}>
          Logout
          </a>
        </div>
        </nav>
        </div>
        ):(
          <div className="nav-container">
            <Link to='/'>
        <div className="nav-logo">
          <img src={'/assets/pizza-now.png'} alt="logo" className="logo"/>
        </div>
      </Link>
        <Link to="/guest">Guest Checkout</Link>
        </div>)}

    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}
const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}
export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
