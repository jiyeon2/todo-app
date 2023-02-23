import Input from 'components/common/Input';
import React from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';

const TodoAddSection = () => {
  return (
    <section>
      <form className="flex items-center gap-2">
        <Input label="새로운 to do 만들기" placeholder="코딩하기..." />
        <button
          className="h-10 w-10 rounded-md bg-teal-300 p-2 text-center hover:bg-teal-600 disabled:bg-slate-600"
          type="submit"
        >
          <PencilIcon className="text-white" />
        </button>
      </form>
    </section>
  );
};

export default TodoAddSection;
