import React, { useState, useEffect } from 'react'
import UpdateProfile from './updateProfile'
import { useDispatch , useSelector } from 'react-redux';
import {me} from '../store/user'

const Profile = () => {

  const user = useSelector(state => state.user)
  const [form, setForm] = useState('')
  const dispatch = useDispatch()
  const setUpdateForm = () => !form ? setForm(<UpdateProfile />) : setForm('')

  useEffect(() => {
    dispatch(me())
  }, [])

   return(
    <div className= 'profile-page'>
    <div className= 'profile-card'>
    <h2>My Profile</h2>
    <p>
     <b>Name</b> : {user.fullName}
    </p>
    <p>
     <b>Email</b> : {user.email}
    </p>
    <p>
      <b>Phone Number</b> : {user.number}
    </p>
    <p>
     <b>Address</b> : {user.address}
    </p>
    <p>
     <b>Keyword</b>: {user.keyword}
    </p>
    </div>
    <div>
        <button onClick={setUpdateForm} className='button'>Update</button>
      {form ? <UpdateProfile user={user} setForm={setUpdateForm} /> : ''}
      </div>
    </div>
   )
 }

 export default Profile
