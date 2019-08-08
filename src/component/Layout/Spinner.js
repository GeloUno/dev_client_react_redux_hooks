import React from 'react';
import spinner from '../../img/giphy.gif';
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ wight: '100px', margin: 'auto', display: 'block' }}
    alt='Loading...'
      />
  );
};

export default Spinner;
