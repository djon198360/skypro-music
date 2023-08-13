import { Routes, Route } from "react-router-dom";
import MainPageRender from "./Main";
import SignupRender from "./Signup";
import SigninRender from "./Signin";
import NotFoundRender from "./NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPageRender />} />
      <Route path="/index" element={<MainPageRender />} />
      <Route path="/signup" element={<SignupRender />} />
      <Route path="/signin" element={<SigninRender />} />
      <Route path="*" element={<NotFoundRender />} />
    </Routes>
  );
}

export default AppRoutes;
