import React from 'react';

const InsertBox = ({ value, handleChange }) => {
  return (
    <div className='pa2'>
      <textarea
        className='tc mt2 pa3 ba b--black bg-near-white'
        type='text'
        placeholder='Write a to-do here'
        onChange={handleChange}
        rows="1"
        cols="35"
        maxlength="291"
        value = { value }
      />

    </div>
  );
}

export default InsertBox;
