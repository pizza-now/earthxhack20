import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => {
  console.log('isLoggedIn:', isLoggedIn)
  return (
    <div className="nav-container">
      <Link to='/'>
        <div className="nav-logo">
          <img src={'/assets/pizza-now.png'} alt="logo" className="logo" />
        </div>
      </Link>
      <nav className="navbar-links">
        {isLoggedIn ? (
          <div>
            <Link to="/home">Home</Link>
            <Link to="/referrals">Refer A Friend</Link>
            <a href="#" onClick={handleClick}>
              Logout
          </a>
          </div>
        ) : (
            <div>
              <Link to="/guest">Guest Checkout</Link>
            </div>)}
      </nav>
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
