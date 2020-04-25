import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div id= "auth-form-container">
      <form onSubmit={handleSubmit} name={name}>
        {name === 'login' ? (
          <div>
            <h3>Welcome back! Sign in here:</h3>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">{displayName}</button>
            </div>
          </div>
        ) : (
          <div>
            <h3>New user? Create an account!</h3>
            <div>
              <label htmlFor="fullName">
              <small>Name</small>
              </label>
              <input name="fullName" type="text" />
            </div>

            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>

            <div>
              <label htmlFor="number">
                <small>Phone Number</small>
              </label>
              <input name="number" type="text" />
            </div>

            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>

            <div>
              <label htmlFor="address">
                <small>Address (optional)</small>
              </label>
              <input name="address" type="text" />
            </div>
              <button type="submit">{displayName}</button>
            </div>
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
      if (formName === "signup"){
        const email = evt.target.email.value
        const password = evt.target.password.value
        const fullName = evt.target.fullName.value
        const address = evt.target.address.value
        const number = evt.target.number.value
        dispatch(auth(email, password, address, fullName, formName, number))
      } else {
        const email = evt.target.email.value
        const password = evt.target.password.value
        dispatch(auth(email, password, formName))
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
