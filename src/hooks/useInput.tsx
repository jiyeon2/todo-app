import React, { useState } from 'react';

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue || '');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return { value, setValue, handleInput };
};

export default useInput;
