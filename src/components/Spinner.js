import React from 'react';

const Spinner = () => {
  return (
      <div className = 'flex flex-column justify-center items-center '>
        <div id="loading"></div>
        <div className = 'ttu tracked white'>
          <h2>loading</h2>
        </div>
      </div>
  );
}

export default Spinner;
