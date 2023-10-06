import React from "react";
import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  // At runtime, we'll render a child component inside this outlet
  return <Outlet />;
};

export default PrivateRoutes;
