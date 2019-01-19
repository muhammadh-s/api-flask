import React from 'react';
import Card from './Card';

const CardList = ({ todos }) => {
  return (
    <div className = 'center'>
      <div className = ''>
      {
        Object.keys(todos).map((TodoList, i) => {
          return (
            <Card
              key = {[i]}
              task = {todos[TodoList].task}
            />
          );
        })
      }
    </div>
  </div>
  );
}


export default CardList;
