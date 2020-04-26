import React from 'react';

export default function Confirmation() {
  return (
    <div className='pizza-confirmed'>
    <div>
      <h2>Order Confirmed</h2>
    </div>

    <div>
      <img src ={'https://media3.giphy.com/media/1WRSmJbbdYlAA/giphy.gif?cid=ecf05e4776190a51b1921e2db0a6f87bdc3a1320822b0b3a&rid=giphy.gif'} width={300} height={300} mode='fit' />
    </div>
    <div>
    <h2>Your Pizza Is On The Way...</h2>
    </div>
    </div>
  );
}
