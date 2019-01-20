import React from 'react';

const Card = ({ task }) => {
  return (
    <div className='mw5 grow bg-yellow br2 pa3 ma2 dib ph4 bw2 shadow-1'>
      <div className = ''>
        <p>{ task }</p>
      </div>
    </div>
  );
}

export default Card;
