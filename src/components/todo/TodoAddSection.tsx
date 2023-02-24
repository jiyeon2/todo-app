import { PlusIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import Input from 'components/common/Input';
import { TodoContext } from 'contexts/todoContext';
import useInput from 'hooks/useInput';
import React, { useContext } from 'react';

const TodoAddSection = () => {
  const { addTodo } = useContext(TodoContext);
  const { value: content, setValue: setContent, handleInput } = useInput();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const todoContent = content.trim();
    if (!todoContent) return;
    addTodo(todoContent).then(() => setContent(''));
  };

  return (
    <section>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input
          label="새로운 to do 만들기"
          placeholder="코딩하기..."
          value={content}
          onChange={handleInput}
          data-testid="new-todo-input"
        />
        <IconButton type="submit" data-testid="new-todo-add-button">
          <PlusIcon className="text-white" />
        </IconButton>
      </form>
    </section>
  );
};

export default TodoAddSection;
