import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../Pages/HomePage";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
