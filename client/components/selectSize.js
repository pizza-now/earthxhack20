import React, { useEffect, useState } from 'react';
import geoFindMe from './geolocation';
import sendMediumSMS from '../../alerts/mediumSMS'
import sendSmallSMS from '../../alerts/smallSMS'
import sendLargeSMS from '../../alerts/largeSMS'
import history from '../history'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../store/contacts'

export default function SelectSize() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const contacts = useSelector(state => state.contacts)
  const [location, setLocation] = useState({})
  let coords
  useEffect(() => {
    coords = geoFindMe()
    setLocation(coords)
    dispatch(getContacts())
  }, [])
  const [size, setSize] = useState('')

  const messageSender = (size) => {
    if (size === 'Small') {
      sendSmallSMS(user, location, contacts)
      history.push('/confirmation')
    } else if (size === 'Medium') {
      sendMediumSMS(user, location, contacts)
      history.push('/confirmation')
    } else {
      sendLargeSMS(user, location, contacts)
      history.push('/confirmation')
    }
  }

  return (
    <div className="size-container">
      <h2>Choose a size:</h2>
      <div className='pizza'>
        <div className="single-size">
          <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={140} height={140} mode='fit' />
          <button className='button' onClick={() => {
            useEffect()
            setSize('Small')
            }}>
            Small
          </button>
        </div>

        <div className="single-size">
          <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={175} height={175} mode='fit' />
          <button className='button' onClick={() => {
            useEffect()
            setSize('Medium')
            }}>
            Medium
          </button>
        </div>

        <div className="single-size">
          <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={225} height={225} mode='fit' />
          <button className='button' onClick={() => {
            useEffect()
            setSize('Large')
            }}>
            Large
          </button>
        </div>
      </div>

      <h4 className="customize">Additional instructions:</h4>
      <div>
        <input placeholder="Optional message...">
        </input>
      </div>
      <div>
      <button className='button' onClick={() => {
        messageSender(size)
        }} >
        Submit
      </button>
      </div>
    </div>
  );
}
