import { AuthContext } from 'contexts/authContext';
import React, { useContext } from 'react';

interface LogoutButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const LogoutButton = (props: LogoutButtonProps) => {
  const { logout } = useContext(AuthContext);

  return (
    <button {...props} onClick={logout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
