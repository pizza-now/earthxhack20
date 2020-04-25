import React from 'react';
import Button from '@material-ui/core/Button';

export default function SelectSize() {
  return (
    <div className='pizza'>
      <Button variant="contained" color="primary">
        Small
      </Button>
      <Button variant="contained" color="primary">
        Medium
      </Button>
      <Button variant="contained" color="primary">
        Large
      </Button>
    </div>
  );
}
