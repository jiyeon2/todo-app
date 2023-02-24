import Input from 'components/common/Input';
import { Link } from 'react-router-dom';
import useAuthForm from './hooks/useAuthForm';
import { AuthData } from './types/auth.types';

const AuthForm = ({
  title,
  link,
  submitButton,
  submitCallback,
}: {
  title: string;
  link: { label: string; to: string };
  submitButton: { label: string; testId?: string };
  submitCallback: (authData: AuthData) => void;
}) => {
  const { formState, handleInputChange, errors, isAllValid, handleSubmit } = useAuthForm();
  const submitHandler = handleSubmit(submitCallback);
  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center justify-between gap-y-4">
      <p className="text-2xl">{title}</p>
      <Input
        name="email"
        type="email"
        label="이메일"
        placeholder="todo@email.com"
        value={formState.email}
        onChange={handleInputChange}
        errors={errors.email}
        data-testid="email-input"
      />
      <Input
        name="password"
        type="password"
        label="비밀번호"
        placeholder="********"
        value={formState.password}
        onChange={handleInputChange}
        errors={errors.password}
        data-testid="password-input"
      />
      <button
        className="h-10 rounded-md bg-teal-400 px-6 font-semibold text-white hover:bg-teal-600 disabled:bg-slate-600"
        type="submit"
        disabled={!isAllValid}
        data-testid={submitButton.testId}
      >
        {submitButton.label}
      </button>
      <Link to={link.to} className={`text-gray-500 hover:underline`}>
        {link.label}
      </Link>
    </form>
  );
};

export default AuthForm;
