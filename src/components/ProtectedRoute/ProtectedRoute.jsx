/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "register", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
