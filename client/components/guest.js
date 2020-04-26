import React, { useEffect, useState } from 'react'
import SelectSize from './selectSize'
import AddContactForm from "./addContactForm"

const Guest = () => {
  const [setForm] = useState('')
  const setAddForm = () => setForm(<AddContactForm />)
  return (
    <div className="guest-page">
      <h2 id="guest-message">Quick cheese pizza is just a click away! Refer a friend to get a free cheese pizza of your choice size!</h2>
      <AddContactForm user={2020} setForm={setAddForm}/>
      <SelectSize/>
    </div>
  )
}

export default Guest
