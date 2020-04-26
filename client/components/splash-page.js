import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (

    <div className='splash-page'>
      <h1>Welcome to Pizza NOW!</h1>

    <div className='splash-options'>

      <Link to='/login'>
        <div className="login" className="splash-card">
        Login
        </div>
      </Link>

      <Link to='/Signup'>
        <div className="signup" className="splash-card">
        Signup
        </div>
      </Link>
    </div>
    </div>
  )
}

export default SplashPage
