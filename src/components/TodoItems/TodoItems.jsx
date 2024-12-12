import React from 'react';
import {TodoItemsContainer} from './components/TodoItemsContainer';
import {NewTodoItem} from './components/NewTodoItem';
import {TodoItem} from './components/TodoItem';
import {useData} from '../../data/hooks/useData';

export const TodoItems = () => {
  const {data: todoItems, isLoading} = useData();

  if (!todoItems || isLoading) {
    return (
      <TodoItemsContainer>
        Загрузка данных...
      </TodoItemsContainer>
    );
  }

  const todoItemsElements = todoItems.map((item, index) => {
    return <TodoItem key={item.id} title={item.title} checked={item.isDone} />;
  });

  return (
    <TodoItemsContainer>
      {todoItemsElements}
      <NewTodoItem />
    </TodoItemsContainer>
  )
}