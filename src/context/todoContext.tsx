import { requestLoadTodos } from 'apis/todo';
import { TodoData } from 'apis/todo/types/todo.types';
import { createContext, useEffect, useState } from 'react';

export type TodoContextType = {
  todos: TodoData[];
  loadTodos: () => Promise<void>;
  addTodo: (todoContent: string) => Promise<void>;
  editTodo: (editData: { todoId: number; todoContent: string }) => Promise<void>;
  deleteTodo: (deleteData: { todoId: number }) => Promise<void>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  loadTodos: async () => {},
  addTodo: async (todoContent) => {},
  editTodo: async (editData) => {},
  deleteTodo: async (deleteData) => {},
});

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const loadTodos = async () => {
    const loadedTodos = await requestLoadTodos();
    console.log({ loadedTodos });
    setTodos(loadedTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (todoContent: string) => {};

  const editTodo = async (editData: { todoId: number; todoContent: string }) => {};

  const deleteTodo = async (deleteData: { todoId: number }) => {};

  return (
    <TodoContext.Provider value={{ todos, loadTodos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
