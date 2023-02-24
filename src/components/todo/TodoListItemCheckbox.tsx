import { TodoData } from 'apis/todo/types/todo.types';
import React, { useContext } from 'react';
import { TodoContext } from 'contexts/todoContext';

export function TodoListItemCheckbox({ todo }: { todo: TodoData }) {
  const { editTodo } = useContext(TodoContext);

  const handleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    editTodo({ id: todo.id, todo: todo.todo, isCompleted: e.currentTarget.checked });
  };
  return <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckbox} />;
}
