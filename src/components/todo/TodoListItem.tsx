import { TodoData } from 'apis/todo/types/todo.types';
import React, { useContext, useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import { TodoListItemCheckbox } from './TodoListItemCheckbox';
import { TodoItemEditSection } from './TodoItemEditSection';
import { TodoContext } from 'context/todoContext';

export function TodoListItem({ todo }: { todo: TodoData }) {
  const [editMode, setEditMode] = useState(false);
  const { deleteTodo } = useContext(TodoContext);

  const handleDeleteButton = () => {
    const confirmed = window.confirm('정말 삭제하시겠습니까?');
    if (confirmed) {
      deleteTodo({ id: todo.id });
    }
  };
  if (editMode) {
    return (
      <TodoItemEditSection
        todo={todo}
        finishEditMode={() => {
          setEditMode(false);
        }}
      />
    );
  }
  return (
    <article className="flex items-center gap-2 text-lg">
      <TodoListItemCheckbox todo={todo} />
      <p className="flex-1">{todo.todo}</p>

      <IconButton
        size="sm"
        onClick={() => {
          setEditMode((prev) => !prev);
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
