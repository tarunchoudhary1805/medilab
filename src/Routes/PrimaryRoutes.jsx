import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorBijal from "../Pages/DoctorBijal";
import DoctorShamshuddin from "../Pages/DoctorShamshuddin";

import HomePage from "../Pages/HomePage";
import BoneAndSoftTissue from "../TreatmentsPages/BoneAndSoftTissue";
import OralCancer from "../TreatmentsPages/OralCancer";
import Gynae from "../TreatmentsPages/Gynae";
import BreastOncoplastic from "../TreatmentsPages/BreastOncoplastic";
import Gastrointestinal from "../TreatmentsPages/Gastrointestinal";
import Hepatobiliary from "../TreatmentsPages/Hepatobiliary";
import Laryngeal from "../TreatmentsPages/Laryngeal";
import Thoracic from "../TreatmentsPages/Thoracic";
import UroOncolgy from "../TreatmentsPages/UroOncology";
import Blogs from "../Pages/Blogs";

const PrimaryRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dr_shamshuddin" element={<DoctorShamshuddin />} />
        <Route path="/dr_bijal" element={<DoctorBijal />} />
        <Route path="/oral_cancer" element={<OralCancer />} />
        <Route path="/BoneAndSoftTissue" element={<BoneAndSoftTissue />} />
        <Route path="/BreastOncoplastic" element={<BreastOncoplastic />} />
        <Route path="/Gastrointestinal" element={<Gastrointestinal />} />
        <Route path="/Gynae" element={<Gynae />} />
        <Route path="/Hepatobiliary" element={<Hepatobiliary />} />
        <Route path="/Laryngeal" element={<Laryngeal />} />
        <Route path="/Thoracic" element={<Thoracic />} />
        <Route path="/UroOncology" element={<UroOncolgy />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default PrimaryRoutes;
