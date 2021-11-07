import React from "react";
import About from "../Components/About";
import Appointment from "../Components/Appointment";
import Contact from "../Components/Contact";
import Departments from "../Components/Departments";
import Doctors from "../Components/Doctors";
import Faqs from "../Components/Faqs";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";

import Header from "../Shared/components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router";

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <WhyChooseUs />
        <About />
        {/* <Services /> */}
        <Departments />
        <Doctors />
        {/* <Faqs /> */}
        {/* <Testimonials /> */}
        <Appointment />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
