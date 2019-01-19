import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className='ph3 mb2 mt2'>
      <input
        className = 'f4 dim no-underline br-pill ba bw2 ph3 pv2 mb3 dib dark-blue bg-white'
        type='submit'
        value='Add'
        onClick={handleSubmit}

      />
    </div>
  );
}

export default SubmitButton;
