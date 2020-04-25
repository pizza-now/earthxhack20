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
      <Button variant="contained" color="primary" href= "/referrals">
        Small
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary">
        Medium
      </Button>
      </div>
      <div>
      <Button variant="contained" color="primary">
        Large
      </Button>
      </div>
      </ThemeProvider>
      <div>
      <TextField id="filled-basic" label="Customize Your Pizza" variant="filled" />
      </div>
    </div>
  );
}
