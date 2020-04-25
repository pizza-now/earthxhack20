import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
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
  return (
    <div className='pizza'>
    <ThemeProvider theme={theme}>
    <div>
      <img src ={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={140} height={140} mode='fit' />
      </div>
      <div>
      <Button variant="contained" color="primary">
        Small
      </Button>
      </div>
      <div>
      <img src ={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={175} height={175} mode='fit' />
      </div>
      <div>
      <Button variant="contained" color="primary">
        Medium
      </Button>
      </div>
      <div>
      <img src ={'https://clipartion.com/wp-content/uploads/2015/10/whole-pepperoni-pizza-clipart-pizza-set-royalty-free-cliparts.jpg'} width={225} height={225} mode='fit' />
      </div>
      <div>
      <Button variant="contained" color="primary">
        Large
      </Button>
      </div>
      </ThemeProvider>
      <div>Customize Your Pizza</div>
      <div>
      <TextField id="filled-basic" label="Customize Your Pizza" variant="filled" />
      </div>
      <div>
        <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" href= "/referrals">
        Submit
      </Button>
      </ThemeProvider>
      </div>
    </div>
  );
}
