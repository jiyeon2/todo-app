import Layout from "components/common/Layout";
import TodoAddForm from "components/todo/TodoAddForm";
import TodoList from "components/todo/TodoList";
import { TodoProvider } from "context/todoContext";

export default function TodoPage() {
  return (
    <Layout>
      <TodoProvider>
        <TodoAddForm />
        <TodoList />
      </TodoProvider>
    </Layout>
  );
}
