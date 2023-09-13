/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
// , Outlet
import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "login", isAllowed }) => {
 // const location = useLocation();
 // const from = location.state?.from?.pathname || '/'; 
  if (!isAllowed || !localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return  <Outlet />;
};

export default ProtectedRoute;
