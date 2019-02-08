import React from 'react';

const InsertBox = ({ value, handleChange, enter }) => {
  return (
    <div className='pa2'>
      <textarea
        className='tc mt2 pa3 ba b--black bg-near-white'
        type='text'
        placeholder='Write a to-do here'
        onChange={ handleChange }
        rows="1"
        cols="35"
        maxLength="291"
        value = { value }
        onKeyDown = { enter }
      />

    </div>
  );
}

export default InsertBox;
