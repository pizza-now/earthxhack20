import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateContact } from '../store/contacts';

function UpdateContactForm(props) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(updateContact(props.contact.id, values));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" ref={register} defaultValue={props.contact.fullName} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={register} defaultValue={props.contact.email} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="number" name="phoneNumber" ref={register} defaultValue={props.contact.phoneNumber} />

      <button className="button" type="submit">
        Update
      </button>
    </form>
  );
}

export default UpdateContactForm
