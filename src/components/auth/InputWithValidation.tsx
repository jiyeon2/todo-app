import { useEffect, useState, useRef } from "react";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  validation: { exp: RegExp; invalidMessage: string };
};

export default function InputWithValidation({
  name,
  type,
  value,
  setValue,
  placeholder,
  validation,
}: Props) {
  const [isValid, setIsValid] = useState(true);
  const [focus, setFocus] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) setIsValid(focus || validation.exp.test(value));
    if (isFirstRender.current) isFirstRender.current = false;
  }, [value, focus]);

  return (
    <>
      <label className="grid grid-cols-3 grid-row-2">
        {name}
        <input
          type={type}
          name={name}
          data-testid={`${name}-input`}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={`col-span-2 ${!isValid ? "border-danger-red" : null}`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <span
          className={`col-start-2 col-sapn-2 text-danger-red ${
            isValid ? "invisible" : null
          }`}
        >
          {validation.invalidMessage}
        </span>
      </label>
    </>
  );
}
