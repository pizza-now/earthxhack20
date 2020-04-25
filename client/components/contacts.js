import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from '../store/contacts'
import AddContactForm from './addContactForm'
import UpdateContactForm from './updateContactForm'
import { Button } from '@material-ui/core';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()
  const [form, setForm] = useState('')
  const [form2, setForm2] = useState('')
  useEffect(() => {
    dispatch(getContacts())
  }, [])

  const setUpdateForm = () => !form2 ? setForm2(<UpdateContactForm />) : setForm2('')

  const setAddForm = () => !form ? setForm(<AddContactForm />) : setForm('')

  return (
    <div>
      <h1>People you've referred:</h1>
      {contacts.length ? (
        contacts.map(contact => (
          <div key={contact.id}>
            <p>Name: {contact.fullName}</p>
            <p>Email: {contact.email}</p>
            <p>Phone number: {contact.phoneNumber}</p>

            <button onClick={setUpdateForm} className='button'>Update</button>
            {form2 ? <UpdateContactForm contact={contact} setForm={setUpdateForm} /> : ''}

            <button onClick={() => dispatch(deleteContact(contact.id))}>Remove referral</button>
          </div>
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
