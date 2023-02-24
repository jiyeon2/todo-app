import AuthForm from 'components/auth/AuthForm';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';

const Signin = () => {
  const { login } = useContext(AuthContext);

  return (
    <AuthForm
      labels={{ title: '로그인', submitButton: '로그인', link: '회원가입 하러 가기' }}
      testId={{ submitButton: 'signin-button' }}
      submitCallback={login}
    />
  );
};

export default Signin;
