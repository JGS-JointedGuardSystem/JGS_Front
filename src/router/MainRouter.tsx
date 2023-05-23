import { Route, Routes } from "react-router-dom";
import TemporaryPage from "../pages/TemporaryPage";
import LoginPage from "../pages/LoginPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/temporary" element={<TemporaryPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default MainRouter;
