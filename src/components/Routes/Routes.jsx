import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import MainPageRender from "../pages/Main";
import SignupRender from "../pages/Signup";
import SigninRender from "../pages/Signin";
import NotFoundRender from "../pages/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CategoryPageRender from "../pages/Category";
import FavoritesPageRender from "../pages/Favorites";

function AppRoutes({ token, setToken }) {
  console.log("route");
  return (
    <StrictMode>
      <Routes>
        <Route path="/login" element={<SigninRender setToken={setToken} />} />
        <Route path="/register" element={<SignupRender />} />
        <Route path="*" element={<NotFoundRender />} />
        {/* Если авторизован то пускать */}
        <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
          <Route path="/" element={<MainPageRender token={token} />} />
          <Route path="/favorites" element={<FavoritesPageRender token={token}/>} />
          <Route path="/category/:id" element={<CategoryPageRender token={token}/>} />
        </Route>
      </Routes>
    </StrictMode>
  );
}

export default AppRoutes;
