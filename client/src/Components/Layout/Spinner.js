import React from 'react';
import spinner from './spinners/circularspinner.gif';

export default () => (
  <div className='spinnerProperty center'>
    <div className='container'>
      <img src={spinner} alt='Loading...' />
    </div>
  </div>
);
