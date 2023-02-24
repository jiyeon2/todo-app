import { signup } from 'apis/auth';
import AuthForm from 'components/auth/AuthForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <AuthForm
      labels={{ title: '회원가입', submitButton: '제출', link: '로그인 하러 가기' }}
      testId={{ submitButton: 'signup-button' }}
      submitCallback={(authData) =>
        signup(authData).then(() => {
          navigate('/signin');
        })
      }
    />
  );
};

export default Signup;
