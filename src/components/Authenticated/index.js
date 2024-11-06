import React from "react";
import { Navigate } from "react-router-dom";

const Authenticated = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? children : <Navigate to="/account/login" replace />;
};

export default Authenticated;
