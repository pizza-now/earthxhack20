import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'
/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user })
const removeUser = () => ({ type: REMOVE_USER })
const updatedUser= user =>({
  type: UPDATE_USER, user })
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    console.log("DATA", res.data)
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, address, fullName, number, method) => async dispatch => {
  let res
  try {
    if (method === "login") {
      res = await axios.post(`/auth/${method}`, { email, password })
    } else {
      res = await axios.post(`/auth/${method}`, { email, password, address, number, fullName })
    }
  } catch (authError) {
    return dispatch(getUser({ error: authError }))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const updateUser =(userId, user) => async dispatch => {
  try{
    const {data} = await axios.put(`api/user/${userId}`, user)
    dispatch( updatedUser(data))
  } catch(error){
    console.log(error)
  }
}
/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
