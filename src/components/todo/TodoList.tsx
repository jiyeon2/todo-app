import { TodoData } from 'apis/todo/types/todo.types';
import React from 'react';
import { TodoListItem } from './TodoListItem';

const TodoList = ({ todos }: { todos: TodoData[] }) => {
  if (!todos.length) {
    return <p>작성된 할 일이 없어요. 새로운 할 일을 작성해보세요</p>;
  }
  return (
    <ul className="flex max-h-72 flex-col gap-2 overflow-y-auto">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
