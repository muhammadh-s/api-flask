import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className='pa2'>
      <input
        type='submit'
        value='submit'
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SubmitButton;
