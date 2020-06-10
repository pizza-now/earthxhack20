import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import BetaBanner from "./beta-banner"

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className="nav-container">

          <div className='banner'>
            <BetaBanner/>
          </div>

          <div className="navigation">

          <Link to='/home'>
            <div className="nav-logo">
              <img src={'/assets/pizza-now.png'} alt="logo" className="logo" />
            </div>
          </Link>
          <nav className="navbar-links">
            <div>
              <Link to="/home">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/referrals">Refer A Friend</Link>
              <a href="#" onClick={handleClick}>
                Logout
            </a>
            </div>
          </nav>

          <div className="dropdown">
            <input type='checkbox' id="dropbtn"></input>
            <label htmlFor="dropbtn" id='dropbtnLabel' ><span>&#8801;</span></label>
            <div className="dropdown-links">
              <Link to="/home">Home</Link>
              <Link to="/referrals">Refer A Friend</Link>
              <a href="#" onClick={handleClick}>
                Logout
          </a>
            </div>
          </div>
          </div>
        </div>
      ) : (
          <div className="nav-container">
            <div className='banner'>
              <BetaBanner/>
            </div>

            <div className='navigation'>

            <Link to='/'>
              <div className="nav-logo">
                <img src={'/assets/pizza-now.png'} alt="logo" className="logo" />
              </div>
            </Link>
            <Link to="/guest">
              <div className='button'>
                Quick Checkout
              </div>
            </Link>

            </div>

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
