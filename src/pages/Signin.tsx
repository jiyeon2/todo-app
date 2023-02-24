import AuthForm from 'components/auth/AuthForm';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';

const Signin = () => {
  const { login } = useContext(AuthContext);

  return (
    <AuthForm
      title="로그인"
      link={{ label: '회원가입 하러 가기', to: '/signup' }}
      submitButton={{ label: '로그인', testId: 'signin-button' }}
      submitCallback={login}
    />
  );
};

export default Signin;
