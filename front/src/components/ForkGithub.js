import React from 'react';

const ForkGithub = ({ link }) => {
  return (
    <div>
      <span id="forkongithub">
      <a href={ link }>
        Fork This App on GitHub
      </a>
      </span>
    </div>
  );
}

export default ForkGithub;
