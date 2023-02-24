import Input from 'components/common/Input';
import React, { useContext, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';
import { TodoContext } from 'context/todoContext';

const TodoAddSection = () => {
  const { addTodo } = useContext(TodoContext);
  const [content, setContent] = useState<string>('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.currentTarget.value);
  };

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
        />
        <IconButton type="submit">
          <PlusIcon className="text-white" />
        </IconButton>
      </form>
    </section>
  );
};

export default TodoAddSection;
