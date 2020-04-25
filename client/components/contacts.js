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
    <div className="referred-page">
      <h2>People you've referred:</h2>
      {contacts.length ? (
        contacts.map(contact => (
          <SingleContact key={contact.id} contact={contact} />
        ))
      ) : (
          <div className="no-referrals">No friends referred yet </div>
        )
      }
      <button className="button" onClick={setAddForm} className='button'>Refer a friend</button>
      {form ? <AddContactForm setForm={setAddForm} /> : ''}
    </div>
  )
}

export default Contacts
