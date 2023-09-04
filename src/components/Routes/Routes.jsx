import { Routes, Route } from "react-router-dom";
import MainPageRender from "../pages/Main";
import SignupRender from "../pages/Signup";
import SigninRender from "../pages/Signin";
import NotFoundRender from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPageRender />} />
      <Route path="/index" element={<MainPageRender />} />
      <Route path="/register" element={<SignupRender />} />
      <Route path="/login" element={<SigninRender />} />
      <Route path="/category/:id" element={<SigninRender />} />
      <Route path="*" element={<NotFoundRender />} />
    </Routes>
  );
}

export default AppRoutes;
