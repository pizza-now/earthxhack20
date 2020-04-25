import React, { useState } from 'react'
import UpdateContactForm from './updateContactForm'
import { deleteContact } from '../store/contacts'
import { useDispatch } from 'react-redux';

const SingleContact = (props) => {
  const dispatch = useDispatch()
  const [form, setForm] = useState('')
  const setUpdateForm = () => !form ? setForm(<UpdateContactForm />) : setForm('')

  return (
    <div>
      <p>Name: {props.contact.fullName}</p>
      <p>Email: {props.contact.email}</p>
      <p>Phone number: {props.contact.phoneNumber}</p>

      <button onClick={setUpdateForm} className='button'>Update</button>
      {form ? <UpdateContactForm contact={props.contact} setForm={setUpdateForm} /> : ''}

      <button onClick={() => dispatch(deleteContact(props.contact.id))}>Remove referral</button>
    </div>
  )
}

export default SingleContact
