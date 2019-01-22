import React from 'react';

const Color = ({color}) => {
  return (
    <div class="ph3">
    <h1 class="f6 fw6 ttu tracked">Priority</h1>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-red" href="#0">1</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-yellow" href="#0">2</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-green" href="#0">3</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink" href="#0">4</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-navy" href="#0">5</a>
  </div>
  );
}

export default Color;
