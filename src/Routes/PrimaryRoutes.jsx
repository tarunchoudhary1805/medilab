import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorBijal from "../Pages/DoctorBijal";
import DoctorShamshuddin from "../Pages/DoctorShamshuddin";

import HomePage from "../Pages/HomePage";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dr_shamshuddin" element={<DoctorShamshuddin />} />
        <Route path="/dr_bijal" element={<DoctorBijal />} />
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
