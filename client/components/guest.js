import React, { useState } from 'react'
import SelectSize from './selectSize'
import GuestContactForm from "./guestContactForm"

const Guest = () => {
  const [form, setForm] = useState('')
  const setAddForm = () => setForm(<GuestContactForm />)
  return (
    <div className="guest-page">
      <h2 id="guest-message">Quick cheese pizza is just a click away! Refer a friend to get a free cheese pizza of your choice size!</h2>
      <GuestContactForm setForm={setAddForm}/>
      <SelectSize/>
    </div>
  )
}

export default Guest
