import { TodoData } from 'apis/todo/types/todo.types';
import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import { TodoListItemCheckbox } from './TodoListItemCheckbox';
import { TodoItemEditSection } from './TodoItemEditSection';

export function TodoListItem({ todo }: { todo: TodoData }) {
  const [editMode, setEditMode] = useState(false);

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

      <IconButton size="sm" variant="warning">
        <TrashIcon className="text-white" />
      </IconButton>
    </article>
  );
}
