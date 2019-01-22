import React from 'react';

const Priority = ({ inc, dec, value, prChange }) => {
  return (
    <div className = ''>
      <div className="f6 link dim br1 ba bw1 ph3 pv2 mb2 dib navy"
        onClick= { inc }>
        +
      </div>
      <input
        className = 'ma3'
        type="number"
        value = { value }
        onChange = { prChange }

      />
      <div className="f6 link dim br1 ba bw1 ph3 pv2 mb2 dib navy"
        onClick={ dec }>
        -
      </div>
    </div>

  );
}

export default Priority;
