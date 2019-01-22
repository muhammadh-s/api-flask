import React from 'react';

const Color = ({ color }) => {
  return (
    <div onClick = {color} >
      <button className="mb1 link dim br1 ph3 pv2 dib black bg-light-red" value='light-red'></button>
      <button className="mb1 link dim br1 ph3 pv2 dib black bg-yellow" value='yellow' ></button>
      <button className="mb1 link dim br1 ph3 pv2 dib black bg-green" value='green' ></button>
    </div>
  );
}

export default Color;
