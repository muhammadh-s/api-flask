import React from 'react';

const Card = ({ task, color }) => {
  return (
    <div className={"mw5 grow br2 pa3 ma2 dib ph4 bw2 shadow-1 " + "bg-" + color } >
        <p>{ task }</p>
    </div>
  );
}

export default Card;
