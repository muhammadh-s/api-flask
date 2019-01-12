import React from 'react';

const Card = ({ task }) => {
  return (
    <div className='mw5 grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <div className = ''>
        <p>{ task }</p>
      </div>
    </div>
  );
}

export default Card;
