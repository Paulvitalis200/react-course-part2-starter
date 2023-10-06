import React from "react";
import UserListPage from "./UserListPage";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
