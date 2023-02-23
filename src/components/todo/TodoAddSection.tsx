import Input from 'components/common/Input';
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import IconButton from 'components/common/IconButton';

const TodoAddSection = () => {
  return (
    <section>
      <form className="flex items-center gap-2">
        <Input label="새로운 to do 만들기" placeholder="코딩하기..." />
        <IconButton type="submit">
          <PlusIcon className="text-white" />
        </IconButton>
      </form>
    </section>
  );
};

export default TodoAddSection;
