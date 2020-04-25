import React from 'react'
import SelectSize from './selectSize'
import AddContactForm from "./addContactForm"

const Guest = () => {
  return (
    <div className="guest-page">
      <h2 id="guest-message">Quick cheese pizza is just a click away! Refer a friend to get a free cheese pizza of your choice size!</h2>
      <AddContactForm/>
      <SelectSize/>
    </div>
  )
}

export default Guest
