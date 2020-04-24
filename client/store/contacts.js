import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CONTACTS = 'GET_CONTACTS'
const ADD_CONTACT = 'ADD_CONTACT'
/**
 * INITIAL STATE
 */
const defaultContacts = []

/**
 * ACTION CREATORS
 */
const gotContacts = contacts => ({ type: GET_CONTACTS, contacts })
const addedContact = newContact => ({
  type: ADD_CONTACT, newContact
})

/**
 * THUNK CREATORS
 */
export const getContacts = () => async dispatch => {
  try {
    const { data } = axios.get('/api/contacts')
    dispatch(gotContacts(data))
  } catch (error) {
    console.log(error)
  }
}
export const addContact = (contact) => async dispatch => {
  try {
    const { data } = axios.post('/api/contacts', contact)
    dispatch(addedContact(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.contacts
    case ADD_CONTACT:
      return [...state, action.newContact]
    default:
      return state
  }
}
