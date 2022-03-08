import { Routes, Route } from "react-router-dom";

import { Pages } from "./pages";


const Router = () => {
  return (
    <Routes>
      <Route path="/*" exact element={<Pages />} />
    </Routes>
  );
};

export default Router;
