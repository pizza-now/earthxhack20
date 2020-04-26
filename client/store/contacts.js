import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CONTACTS = 'GET_CONTACTS'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const ADD_GUEST_CONTACT = 'ADD_GUEST_CONTACT'

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

export const addGuestContact = contact => ({
  type: ADD_GUEST_CONTACT, contact
})

const deletedContact = contactId => ({
  type: DELETE_CONTACT, contactId
})

const updatedContact = contact => ({
  type: UPDATE_CONTACT, contact
})
/**
 * THUNK CREATORS
 */
export const getContacts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/contacts')
    dispatch(gotContacts(data))
  } catch (error) {
    console.log(error)
  }
}


export const addContact = (contact) => async dispatch => {
  try {
    const { data } = await axios.post('/api/contacts', contact)
    dispatch(addedContact(data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteContact = (contactId) => async dispatch => {
  try {
    await axios.delete(`/api/contacts/${contactId}`)
    dispatch(deletedContact(contactId))
  } catch (error) {
    console.log(error)
  }
}

export const updateContact = (contactId, contact) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/contacts/${contactId}`, contact)
    dispatch(updatedContact(data))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultContacts, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.contacts
    case ADD_CONTACT:
      return [...state, action.newContact]
    case DELETE_CONTACT:
      return state.filter(contact => (contact.id !== action.contactId))
    case UPDATE_CONTACT:
      return state.map(contact => (contact.id === action.contact.id ? action.contact : contact))

    case ADD_GUEST_CONTACT:
      return [...state, action.contact]
    default:
      return state
  }
}
