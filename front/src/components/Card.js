import React from 'react';
import delIcon from '../delete.svg';

const Card = ({ task, color, del, id }) => {
  return (
    <div className={" card mw5 grow br2 ma3 dib ph4 bw2 pb3 pt3 shadow-1 " + "bg-" + color } >
        <img
          className = 'icon'
          src={delIcon}
          alt='deleteicon'
          id = { id }
          onClick = { del }
        />
        <p>{ task }</p>
    </div>
  );
}

export default Card;
