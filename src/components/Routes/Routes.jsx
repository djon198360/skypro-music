import { StrictMode, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPageRender from "../pages/Main";
import SignupRender from "../pages/Signup";
import SigninRender from "../pages/Signin";
import NotFoundRender from "../pages/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CategoryPageRender from "../pages/Category";
import FavoritesPageRender from "../pages/Favorites";
import Context from "../AuthForm/AuthForm";

function AppRoutes() {
  const [token] = useContext(Context); 
  return (
    <StrictMode>
      <Routes>
        <Route path="/login" element={<SigninRender />} />
        <Route path="/register" element={<SignupRender />} />
        <Route path="*" element={<NotFoundRender />} />
       
        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}> {/* Если токен есть */}
          <Route path="/" element={<MainPageRender />} />
          <Route path="/favorites" element={<FavoritesPageRender />} />
          <Route path="/category/:id" element={<CategoryPageRender />} />
        </Route>
      </Routes>
    </StrictMode>
  );
}

export default AppRoutes;
