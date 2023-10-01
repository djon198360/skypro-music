import { StrictMode, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPageRender from "../../Pages/Main";
 import SignupRender from "../../Pages/Signup";
import SigninRender from "../../Pages/Signin"; 
import NotFoundRender from "../../Pages/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CategoryPageRender from "../../Pages/Category";
import FavoritesPageRender from "../../Pages/Favorites";
import Context from "../AuthForm/AuthForm";
// import AuthPage from "../../Pages/AuthPage/AuthPage"

function AppRoutes() {
  const [token] = useContext(Context);
  return (
    <StrictMode>
      <Routes>
        <Route path="/login" element={<SigninRender />} />
        <Route path="/register" element={<SignupRender />} />
        <Route path="*" element={<NotFoundRender />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
          {/* Если токен есть */}
          <Route path="/" element={<MainPageRender />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
          <Route path="/favorites" element={<FavoritesPageRender />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
          <Route path="/category/:id" element={<CategoryPageRender />} />
        </Route>
      </Routes>
    </StrictMode>
  );
}

export default AppRoutes;
