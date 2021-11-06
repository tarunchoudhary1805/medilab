import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorProfile from "../Pages/DoctorProfile";

import HomePage from "../Pages/HomePage";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dr_profile" element={<DoctorProfile />} />
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
