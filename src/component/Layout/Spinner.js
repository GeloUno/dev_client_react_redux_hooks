import React from 'react';
import spinner from '../../img/giphy.gif';
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '25%',height:'25%', margin: 'auto', display: 'block' }}
    alt='Loading...'
      />
  );
};

export default Spinner;
