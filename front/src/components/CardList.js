import React from 'react';
import Card from './Card';

const CardList = ({ todos }) => {
  return (
    <div className = "flex items-center flex-wrap justify-center flex-wrap-reverse">
      {
        Object.keys(todos).map((TodoList, i) => {
          return (
            <Card
              color = { todos[TodoList].color }
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
