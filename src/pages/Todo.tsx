import TodoAddSection from 'components/todo/TodoAddSection';
import TodoList from 'components/todo/TodoList';
import { TodoProvider } from 'context/todoContext';

const Todo = () => {
  return (
    <TodoProvider>
      <div>
        <TodoAddSection />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todo;
