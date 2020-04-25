import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../store/contacts'
import AddContactForm from './addContactForm'
import SingleContact from './singleContact'

const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  const [form, setForm] = useState('')
  const setAddForm = () => !form ? setForm(<AddContactForm />) : setForm('')

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  return (
    <div>
      <h1>People you've referred:</h1>
      {contacts.length ? (
        contacts.map(contact => (
          <SingleContact key={contact.id} contact={contact} />
        ))
      ) : (
          <div>No friends referred yet </div>
        )
      }
      <button onClick={setAddForm} className='button'>Refer a friend</button>
      {form ? <AddContactForm setForm={setAddForm} /> : ''}
    </div>
  )
}

export default Contacts
