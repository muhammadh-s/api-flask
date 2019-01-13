import React from 'react';

const InsertBox = ({ insertField, handleChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--gray bg-white'
        type='text'
        placeholder='to-do'
        onChange={handleChange}
        size= '35'
      />
    </div>
  );
}

export default InsertBox;
