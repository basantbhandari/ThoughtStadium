import React, { Fragment } from 'react';
import spinner from './spinners/rainbowspinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '60px',
        height: '60px',
        margin: 'auto',
        display: 'block',
      }}
      alt='Loading...'
    />
  </Fragment>
);
