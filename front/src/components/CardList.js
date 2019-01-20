import React from 'react';
import Card from './Card';

const CardList = ({ todos }) => {
  return (
    <div className = "flex items-start flex-wrap justify-center">
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
  );
}


export default CardList;
