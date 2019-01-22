import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div>
      <button
        className = 'mt2 f6 no-underline br-pill ph4 pv2 mb2 dib white bg-navy'
        type='submit'
        value='Add'
        onClick={handleSubmit}
        >Add
      </button>
    </div>
  );
}

export default SubmitButton;
