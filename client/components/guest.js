import React, { useState } from 'react'
import SelectSize from './selectSize'
import GuestContactForm from "./guestContactForm"

const Guest = () => {
  const [form, setForm] = useState('')
  const setAddForm = () => setForm(<GuestContactForm />)
  return (
    <div className="guest-page">

      <div className='guest-refer-form'>
      <h3>Daily Deal!</h3>
        <h4 className="guest-message">
          Refer a friend to get a free cheese pizza of your choice size! Enter their details here.</h4>
        <GuestContactForm setForm={setAddForm}/>
      </div>

      <SelectSize/>

    </div>
  )
}

export default Guest
