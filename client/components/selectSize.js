import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import geoFindMe from './geolocation';
import sendMediumSMS from '../../alerts/mediumSMS'
import sendSmallSMS from '../../alerts/smallSMS'
import sendLargeSMS from '../../alerts/largeSMS'
import history from '../history'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../store/contacts'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

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
      console.log(user, location, contacts)
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
      <div className='pizza'>
        <ThemeProvider theme={theme}>

          <div className="single-size">
            <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={140} height={140} mode='fit' />
            <Button className="size-button" variant="contained" color="primary" onClick={() => setSize('Small')}>
              Small
      </Button>
          </div>

          <div className="single-size">
            <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={175} height={175} mode='fit' />
            <Button className="size-button" variant="contained" color="primary" onClick={() => setSize('Medium')}>
              Medium
      </Button>
          </div>

          <div className="single-size">
            <img src={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={225} height={225} mode='fit' />
            <Button className="size-button" variant="contained" color="primary" onClick={() => (
              setSize('Large')
            )}>
              Large
      </Button>
          </div>

        </ThemeProvider>
      </div>

      <div className="customize">Customize Your Pizza</div>
      <div>
        <TextField id="filled-basic" label="(Optional message)" variant="filled" />
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" onClick={() => {
            messageSender(size)
          }} >
            Submit
      </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
