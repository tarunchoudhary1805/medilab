import React from "react";
import { Route, Switch } from "react-router-dom";
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
import Blog from "../Pages/Blog";
import Images from "../Pages/Images";
import Image from "../Pages/Image";

const PrimaryRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dr_shamshuddin" component={DoctorShamshuddin} />
        <Route path="/dr_bijal" component={DoctorBijal} />
        <Route path="/oral_cancer" component={OralCancer} />
        <Route path="/BoneAndSoftTissue" component={BoneAndSoftTissue} />
        <Route path="/BreastOncoplastic" component={BreastOncoplastic} />
        <Route path="/Gastrointestinal" component={Gastrointestinal} />
        <Route path="/Gynae" component={Gynae} />
        <Route path="/Hepatobiliary" component={Hepatobiliary} />
        <Route path="/Laryngeal" component={Laryngeal} />
        <Route path="/Thoracic" component={Thoracic} />
        <Route path="/UroOncology" component={UroOncolgy} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blog" component={Blog} />
        <Route path="/images" component={Images} />
        <Route path="/image" component={Image} />
      </Switch>
    </>
  );
};

export default PrimaryRoutes;
