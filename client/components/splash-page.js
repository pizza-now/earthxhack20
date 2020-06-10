import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (

    <div className='splash-page'>
      <div className='splash-options'>
        <h1>Pizza NOW!</h1>
        <h2>We're here to help. Order a pizza today and get speedy delivery.</h2>

        <div classname="splash-buttons">
          <Link to='/login'>
            <button className="button">
              Login
            </button>
          </Link>

          <Link to='/Signup'>
            <button className="button">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
