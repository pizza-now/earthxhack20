import React, { useState } from 'react'
import UpdateContactForm from './updateContactForm'
import { deleteContact } from '../store/contacts'

const SingleContact = (props) => {
  const [form, setForm] = useState('')
  const setUpdateForm = () => !form ? setForm(<UpdateContactForm />) : setForm('')

  return (
    <div className="single-contact">
      <p>Name: {props.contact.fullName}</p>
      <p>Email: {props.contact.email}</p>
      <p>Phone number: {props.contact.phoneNumber}</p>

      <div classNames="referral-buttons">
        <button onClick={setUpdateForm} className='button'>Update</button>
        {form ? <UpdateContactForm contact={props.contact} setForm={setUpdateForm} /> : ''}

        <button onClick={() => dispatch(deleteContact(contact.id))} className='button'>Delete</button>
      </div>
    </div>
  )
}

export default SingleContact
