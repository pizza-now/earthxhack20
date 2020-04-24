import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1 className="nav-logo">Pizza NOW</h1>
      <nav className="navbar-links">
        <Link to="/homepage">Home</Link>
        <Link to="/refer">Refer a Friend</Link>
      </nav>
    </div>
  )
}

export default Navbar
