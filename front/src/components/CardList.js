import React from 'react';
import Card from './Card';

const CardList = ({ todos }) => {
  return (
    <div className = 'center'>
      {
        todos.map((todoList, i) => {
          return (
            <Card
              key = {[i]}
              task={todos[i].task}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
