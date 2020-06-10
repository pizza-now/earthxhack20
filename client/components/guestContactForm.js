import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addGuestContact } from '../store/contacts'

function GuestContactForm(props) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(addGuestContact(values))
    props.setForm()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input type="text" name="fullName" placeholder="Full Name" ref={register} />
      <input type="email" name="email" ref={register} placeholder="Email"/>
      <input type="number" name="phoneNumber" ref={register} placeholder="Phone Number"/>
      <button className="button" type="submit">
        Send referral
      </button>
    </form>
  );
}

export default GuestContactForm
