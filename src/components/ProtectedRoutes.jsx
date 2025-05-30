/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);

  if (!isAuth && !loading) {
    toast.error("Sign in to access this page");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoutes;
