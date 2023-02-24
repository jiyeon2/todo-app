import { AuthContext } from 'context/authContext';
import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthProtected = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthProtected;
