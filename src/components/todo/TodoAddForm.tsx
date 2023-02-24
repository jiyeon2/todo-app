import { useTodo } from "context/todoContext";
import { useState } from "react";

export default function TodoAddForm() {
  const { createTodo } = useTodo();
  const [value, setValue] = useState("");

  const handleSubmitCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({ todo: value });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmitCreateTodo} className={"mt-4"}>
      <input
        value={value}
        placeholder={"여기에 할 일 입력"}
        onChange={(e) => setValue(e.target.value)}
        data-testid="new-todo-input"
        className="w-full"
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        className="mt-2 mb-4"
      >
        추가
      </button>
    </form>
  );
}
