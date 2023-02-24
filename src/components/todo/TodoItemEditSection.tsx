import { TodoData } from 'apis/todo/types/todo.types';
import React, { useContext } from 'react';
import { ArrowUturnLeftIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import { TodoListItemCheckbox } from './TodoListItemCheckbox';
import useInput from 'hooks/useInput';
import { TodoContext } from 'context/todoContext';

export function TodoItemEditSection({
  todo,
  finishEditMode,
}: {
  todo: TodoData;
  finishEditMode: () => void;
}) {
  const { value, handleInput } = useInput(todo.todo);
  const { editTodo } = useContext(TodoContext);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const editedContent = value.trim();
    if (!editedContent) return;
    editTodo({ id: todo.id, isCompleted: todo.isCompleted, todo: editedContent }).then(() => {
      finishEditMode();
    });
  };
  return (
    <article className="flex items-center gap-2 text-lg">
      <TodoListItemCheckbox todo={todo} />
      <form onSubmit={handleSubmit} className="flex flex-1 gap-2 ">
        <input
          className="flex-1 rounded-md ring-2 ring-black"
          autoFocus
          value={value}
          onChange={handleInput}
          data-testid="modify-input"
        />
        <IconButton size="sm" type="submit" data-testid="submit-button">
          <ArchiveBoxArrowDownIcon className="text-white" />
        </IconButton>
      </form>

      <IconButton size="sm" variant="warning" onClick={finishEditMode} data-testid="cancel-button">
        <ArrowUturnLeftIcon className="text-white" />
      </IconButton>
    </article>
  );
}
