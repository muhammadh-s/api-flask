import React from 'react';
import Card from './Card';

const CardList = ({ key, todos, del, id }) => {
  return (
    <div className = "flex items-center flex-wrap justify-center flex-wrap-reverse">
      {
        Object.keys(todos).map((TodoList, i) => {
          return (
            <Card
              del = {del}
              id = {todos[TodoList].id}
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
