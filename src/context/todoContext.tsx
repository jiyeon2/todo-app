import { requestCreateTodo, requestLoadTodos } from 'apis/todo';
import { TodoData } from 'apis/todo/types/todo.types';
import { createContext, useEffect, useState } from 'react';

export type TodoContextType = {
  todos: TodoData[];
  loadTodos: () => Promise<void>;
  addTodo: (todoContent: TodoData['todo']) => Promise<void>;
  editTodo: (editData: Pick<TodoData, 'id' | 'todo'>) => Promise<void>;
  deleteTodo: (deleteData: Pick<TodoData, 'id'>) => Promise<void>;
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
    setTodos(loadedTodos.reverse());
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (todoContent: TodoData['todo']) => {
    try {
      await requestCreateTodo(todoContent);
      loadTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const editTodo = async (editData: Pick<TodoData, 'id' | 'todo'>) => {};

  const deleteTodo = async (deleteData: Pick<TodoData, 'id'>) => {};

  return (
    <TodoContext.Provider value={{ todos, loadTodos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
