import { Route, Routes } from "react-router-dom";
import TemporaryPage from "../pages/TemporaryPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/temporary" element={<TemporaryPage />} />
    </Routes>
  );
}

export default MainRouter;
