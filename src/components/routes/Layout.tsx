import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="container m-auto flex h-screen w-screen flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default Layout;
