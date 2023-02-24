import { TodoData } from 'apis/todo/types/todo.types';
import React, { useState } from 'react';
import {
  PencilIcon,
  TrashIcon,
  ArrowUturnLeftIcon,
  ArchiveBoxArrowDownIcon,
} from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import { TodoListItemCheckbox } from './TodoListItemCheckbox';

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

function TodoItemEditSection({
  todo,
  finishEditMode,
}: {
  todo: TodoData;
  finishEditMode: () => void;
}) {
  return (
    <article className="flex items-center gap-2 text-lg">
      <TodoListItemCheckbox todo={todo} />
      <input className="flex-1 rounded-md ring-2 ring-black" defaultValue={todo.todo} autoFocus />
      <IconButton size="sm">
        <ArchiveBoxArrowDownIcon className="text-white" />
      </IconButton>

      <IconButton size="sm" variant="warning" onClick={finishEditMode}>
        <ArrowUturnLeftIcon className="text-white" />
      </IconButton>
    </article>
  );
}
