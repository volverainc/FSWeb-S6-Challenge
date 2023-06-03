import React from 'react';
import Karakter from './Karakter';
import "./Karakterler.css"
const Karakterler = ({ karakterler }) => {
  return (
    <div className='karakterler'>
      {karakterler.map((k) => (
        <Karakter {...k} />
      ))}
    </div>
  );
};

export default Karakterler;
