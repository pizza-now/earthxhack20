import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (
    <div className='splash-options'>

      <Link to='/login'>
        <div className="login" className="splash-card">
          <h2>Login</h2>
        </div>
      </Link>

      <Link to='/Signup'>
        <div className="signup" className="splash-card">
          <h2>Signup</h2>
        </div>
      </Link>

      <Link to='/guest'>
        <div className="guest-checkout" className="splash-card">
          <h2>Guest Checkout</h2>
        </div>
      </Link>
    </div>
  )
}

export default SplashPage
