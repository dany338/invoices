import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRouteProps {
  isAllowed: boolean;
  redirectTo?: string;
  children: ReactNode | any;
};

const ProtectedRoute: FC<IProtectedRouteProps> = ({
  isAllowed,
  redirectTo = "/",
  children
}) => {

  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;