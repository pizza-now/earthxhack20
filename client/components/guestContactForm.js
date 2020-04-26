import React , {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';

function GuestContactForm(props) {
  const [fullName, setFullName] = useState('')

  const [email ,setEmail] = useState('')

  const [phoneNumber, setPhoneNumber] =useState('')

  const { handleSubmit, register } = useForm();
  useEffect(()=>{
    sessionStorage.setItem('Storage', event.target.value)
  },[fullName,email,phoneNumber])

  const onSubmit = () => {
    props.setForm()
  };
 const onChange = event =>{
  setFullName(event.target.value)
  setEmail(event.target.value)
  setPhoneNumber(event.target.value)
 }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" value= {fullName} onChange = {onChange} ref={register} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} onChange = {onChange} ref={register} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="number" name="phoneNumber" value={phoneNumber} onChange = {onChange} ref={register} />
      <button className="button" type="submit">
        Click to Submit
      </button>
    </form>
  );
}

export default GuestContactForm
