import React from 'react';

const InsertBox = ({ insertField, handleChange }) => {
  return (
    <div className='pa2'>
      <input
        className='tc mt2 pa3 ba b--gray bg-white'
        type='text'
        placeholder='to-do'
        onChange={handleChange}
        size= '35'
    
      />
      {/* <textarea autofocus rows="4" cols="35"
      /> */}
    </div>
  );
}

export default InsertBox;
