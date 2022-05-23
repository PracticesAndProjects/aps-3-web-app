import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../components/Hooks/UseAuth";

interface IProps {
  children: React.ReactNode;
}

function ProtectedRoute(props: IProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
