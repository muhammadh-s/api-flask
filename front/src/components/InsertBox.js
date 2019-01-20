import React from 'react';

const InsertBox = ({ value, handleChange }) => {
  return (
    <div className='pa2'>
      <input
        className='tc mt2 pa3 ba b--black bg-near-white'
        type='text'
        placeholder='Write a to-do here'
        onChange={handleChange}
        size= '35'
        value = { value }


      />
      {/* <textarea autofocus rows="4" cols="35"
      /> */}
    </div>
  );
}

export default InsertBox;
