import {
  requestCreateTodo,
  requestDeleteTodo,
  requestLoadTodos,
  requestUpdateTodo,
} from 'apis/todo';
import { TodoData } from 'apis/todo/types/todo.types';
import { createContext, useEffect, useState } from 'react';
import { handleError } from 'utils/errorHandler';

export type TodoContextType = {
  todos: TodoData[];
  loadTodos: () => Promise<void>;
  addTodo: (todoContent: TodoData['todo']) => Promise<void>;
  editTodo: (editData: Pick<TodoData, 'id' | 'todo' | 'isCompleted'>) => Promise<void>;
  deleteTodo: (deleteData: Pick<TodoData, 'id'>) => Promise<void>;

  editingTodo: TodoData | null;
  startEditingTodo: (todo: TodoData) => void;
  finishEditingTodo: () => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  editingTodo: null,
  loadTodos: async () => {},
  addTodo: async (todoContent) => {},
  editTodo: async (editData) => {},
  deleteTodo: async (deleteData) => {},
  startEditingTodo: (todo: TodoData) => {},
  finishEditingTodo: () => {},
});

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [editingTodo, setEditingTodo] = useState<TodoData | null>(null);

  const startEditingTodo = (todo: TodoData) => {
    setEditingTodo(todo);
  };
  const finishEditingTodo = () => {
    setEditingTodo(null);
  };

  const loadTodos = async () => {
    try {
      const loadedTodos = await requestLoadTodos();
      setTodos(loadedTodos.reverse());
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (todoContent: TodoData['todo']) => {
    try {
      await requestCreateTodo(todoContent);
      loadTodos();
    } catch (error) {
      handleError(error);
    }
  };

  const editTodo = async (editData: Pick<TodoData, 'id' | 'todo' | 'isCompleted'>) => {
    try {
      await requestUpdateTodo(editData);
      loadTodos();
    } catch (error) {
      handleError(error);
    }
  };

  const deleteTodo = async (deleteData: Pick<TodoData, 'id'>) => {
    try {
      await requestDeleteTodo(deleteData);
      loadTodos();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        loadTodos,
        addTodo,
        editTodo,
        deleteTodo,
        editingTodo,
        startEditingTodo,
        finishEditingTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
