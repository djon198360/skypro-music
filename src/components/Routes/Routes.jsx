import { StrictMode, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPageRender from "../../Pages/Main/Main";
 import SignupRender from "../../Pages/Signup/Signup";
import SigninRender from "../../Pages/Signin/Signin"; 
import NotFoundRender from "../../Pages/NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CategoryPageRender from "../../Pages/Category/Category";
import {FavoritesPageRender} from "../../Pages/Favorites/Favorites";
import Context from "../AuthForm/AuthForm";

function AppRoutes() {
  const [user] = useContext(Context);
  return (
    <StrictMode>
      <Routes>
        <Route path="/login" element={<SigninRender />} />
        <Route path="/register" element={<SignupRender />} />
        <Route path="*" element={<NotFoundRender />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          {/* Если токен есть */}
          <Route path="/" element={<MainPageRender />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/favorites" element={<FavoritesPageRender />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/category/:id" element={<CategoryPageRender />} />
        </Route>
      </Routes>
    </StrictMode>
  );
}

export default AppRoutes;
