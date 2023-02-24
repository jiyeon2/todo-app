import { AuthContext } from 'contexts/authContext';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RedirectToTodoPageIfLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return <Navigate to="/todo" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default RedirectToTodoPageIfLoggedIn;
