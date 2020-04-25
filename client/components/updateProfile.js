import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUser } from '../store/user';


function UpdateProfile (props) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(updateUser(props.user.id, values))
    props.setForm()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" ref={register} defaultValue={props.user.fullName} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" ref={register} defaultValue={props.user.email} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="number" name="phoneNumber" ref={register} defaultValue={props.user.number} />
      <label htmlFor="address">Address</label>
      <input type="text" name="address" ref={register} defaultValue={props.user.address} />
      <label htmlFor="keyword">Keyword</label>
      <input type="text" name="keyword" ref={register} defaultValue={props.user.keyword} />
      <button className="button" type="submit">
        Update
      </button>
    </form>
  );
}

export default UpdateProfile
