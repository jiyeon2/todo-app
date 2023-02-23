import { TodoData } from 'apis/todo/types/todo.types';
import TodoAddSection from 'components/todo/TodoAddSection';
import TodoList from 'components/todo/TodoList';
import React from 'react';

const todos: TodoData[] = Array(2)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    todo: '청소',
    isComplete: false,
    userId: 1,
  }));

const Todo = () => {
  // 투두 프로바이더로 감싸기

  return (
    <div>
      <TodoAddSection />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
