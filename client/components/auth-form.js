import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div id="auth-form-container">
      <form onSubmit={handleSubmit} name={name} className="form">
        {name === 'login' ? (
          <div className='auth-form'>
            <h3>Welcome back! Sign in here:</h3>

            <label htmlFor="email">Email</label>
            <input name="email" type="text" />

            <label htmlFor="password">Password</label>
            <input name="password" type="password" />

            <button type="submit" className='button'>{displayName}</button>
          </div>
        ) : (
            <div className='auth-form'>
              <h3>New user? Create an account!</h3>
              <label htmlFor="fullName">Name</label>
              <input name="fullName" type="text" />

              <label htmlFor="email">Email</label>
              <input name="email" type="text" />

              <label htmlFor="number">Phone Number</label>
              <input name="number" type="text" />

              <label htmlFor="password">Password</label>
              <input name="password" type="password" />

              <label htmlFor="address">Address (optional)</label>
              <input name="address" type="text" />

              <button type="submit" className='button'>{displayName}</button>
            </div>
          )}
        {error && error.response && <div> {error.response.data} </div>}

      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      if (formName === "signup") {
        const email = evt.target.email.value
        const password = evt.target.password.value
        const fullName = evt.target.fullName.value
        const address = evt.target.address.value
        const number = evt.target.number.value
        dispatch(auth(email, password, address, fullName, number, formName))
      } else {
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, null, null, null, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
