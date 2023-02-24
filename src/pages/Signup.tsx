import { signup } from 'apis/auth';
import AuthForm from 'components/auth/AuthForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <AuthForm
      title="회원가입"
      link={{ label: '로그인 하러 가기', to: '/signin' }}
      submitButton={{ label: '제출', testId: 'signup-button' }}
      submitCallback={(authData) =>
        signup(authData).then(() => {
          navigate('/signin');
        })
      }
    />
  );
};

export default Signup;
