import LogoutButton from 'components/auth/LogoutButton';
import TodoAddSection from 'components/todo/TodoAddSection';
import TodoList from 'components/todo/TodoList';
import { TodoProvider } from 'contexts/todoContext';

const Todo = () => {
  return (
    <TodoProvider>
      <div className="flex flex-col gap-4">
        <LogoutButton className="self-end rounded-md bg-blue-400 p-1 text-white hover:bg-blue-600" />
        <TodoAddSection />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todo;
