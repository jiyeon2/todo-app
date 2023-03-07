import { TodoProps } from "components/todo/TodoItem.type";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchGetTodos,
  fetchUpdateTodo,
} from "apis/todo/todo";
import { TodoContextProps } from "./todoContext.type";
import { handleError } from "utils";

const TodoContext = createContext<TodoContextProps>(null!);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const refreshTodos = async () => {
    try {
      const response = await fetchGetTodos();
      setTodos(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const createTodo: TodoContextProps["createTodo"] = async (props) => {
    try {
      await fetchCreateTodo(props);
      refreshTodos();
    } catch (error) {
      handleError(error);
    }
  };

  const updateTodo: TodoContextProps["updateTodo"] = async (props) => {
    try {
      await fetchUpdateTodo(props);
      refreshTodos();
    } catch (error) {
      handleError(error);
    }
  };

  const deleteTodo: TodoContextProps["deleteTodo"] = async (props) => {
    try {
      await fetchDeleteTodo(props);
      refreshTodos();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  if (!TodoContext) throw new Error("no AuthContext");
  return useContext(TodoContext);
}
