import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to='/'>
        <div className="nav-logo">
          <img src={'/assets/pizza-now.png'} alt="logo" className="logo"/>
        </div>
      </Link>

      <nav className="navbar-links">
        <Link to="/guest">Guest Checkout</Link>
        <Link to="/referrals">Refer A Friend</Link>
      </nav>
    </div>
  )
}

export default Navbar
