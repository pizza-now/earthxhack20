import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = () => {
  return (
    <div>
      <h1>Pizza NOW</h1>
      <Link to='/login'>Login</Link>
      <Link to='/Signup'>Signup</Link>
      <Link to='/guest'>Checkout as a Guest</Link>
    </div>
  )
}

export default SplashPage
