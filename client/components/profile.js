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
    <div>
    <h2>My Profile</h2>
    <p>
     Full Name : {user.fullName}
    </p>
    <p>
     Email : {user.email}
    </p>
    <p>
      Phone Number : {user.number}
    </p>
    <p>
     Address : {user.address}
    </p>
    <p>
     Keyword: {user.keyword}
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
