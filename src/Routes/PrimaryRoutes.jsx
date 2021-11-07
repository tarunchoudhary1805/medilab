import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorBijal from "../Pages/DoctorBijal";
import DoctorShamshuddin from "../Pages/DoctorShamshuddin";

import HomePage from "../Pages/HomePage";
import OralCancer from "../TreatmentsPages/OralCancer";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dr_shamshuddin" element={<DoctorShamshuddin />} />
        <Route path="/dr_bijal" element={<DoctorBijal />} />
        <Route path="/oral_cancer" element={<OralCancer />} />
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
