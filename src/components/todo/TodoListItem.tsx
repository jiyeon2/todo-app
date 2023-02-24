import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { TodoData } from 'apis/todo/types/todo.types';
import IconButton from 'components/common/IconButton';
import { TodoContext } from 'context/todoContext';
import { useContext } from 'react';
import { TodoItemEditSection } from './TodoItemEditSection';
import { TodoListItemCheckbox } from './TodoListItemCheckbox';

export function TodoListItem({ todo }: { todo: TodoData }) {
  const { deleteTodo, editingTodo, finishEditingTodo, startEditingTodo } = useContext(TodoContext);

  const handleDeleteButton = () => {
    const confirmed = window.confirm('정말 삭제하시겠습니까?');
    if (confirmed) {
      deleteTodo({ id: todo.id });
    }
  };
  if (editingTodo && editingTodo.id === todo.id) {
    return <TodoItemEditSection todo={todo} finishEditMode={finishEditingTodo} />;
  }
  return (
    <article className="flex items-center gap-2 text-lg">
      <TodoListItemCheckbox todo={todo} />
      <p className="flex-1">{todo.todo}</p>

      <IconButton
        size="sm"
        onClick={() => {
          startEditingTodo(todo);
        }}
      >
        <PencilIcon className="text-white" />
      </IconButton>

      <IconButton size="sm" variant="warning" onClick={handleDeleteButton}>
        <TrashIcon className="text-white" />
      </IconButton>
    </article>
  );
}
