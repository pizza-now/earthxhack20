import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../store/contacts'
import AddContactForm from './addContactForm'
import { Button } from '@material-ui/core';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  const [form, setForm] = useState('')
  useEffect(() => {
    dispatch(getContacts())
  }, [])
  return (
    <div>
      <h1>People you've referred:</h1>
      {contacts.length ? (
        contacts.map(contact => (
          <div key={contact.id}>
            {contact.fullName}
            {contact.email}
            {contact.phoneNumber}
          </div>
        ))
      ) : (
          <div>No friends referred yet </div>
        )
      }
      <button onClick={() => !form ? setForm(<AddContactForm />) : setForm('')} className='button'>Refer a friend</button>
      {form ? <AddContactForm /> : ''}
    </div>
  )
}

export default Contacts
