import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

const Header = () => {
  return (
    <>
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope"></i>{" "}
            <a href="mailto:contact@example.com">drsjvirani@gmail.com</a>
            <i class="bi bi-phone"></i>+91 98798 55522
          </div>
          <div class="d-none d-lg-flex social-links align-items-center">
            <a href="https://twitter.com/viranicancer" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/suratcancerhospital"
              class="facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#doctors">
                  Doctors
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#treatments">
                  Treatments
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#doctors">
                  Facilities
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#doctors">
                  Gallery
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Specialist In</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Oral Cancer Suregery</a>
                  </li>

                  <li>
                    <a href="#">Laryngeal Surgery</a>
                  </li>
                  <li>
                    <a href="#">Breast Oncoplastic Surgery</a>
                  </li>
                  <li>
                    <a href="#">Thoracic Oncology</a>
                  </li>
                  <li>
                    <a href="#">Gynae Oncology</a>
                  </li>
                  <li>
                    <a href="#">Gastrointestinal Oncology</a>
                  </li>
                  <li>
                    <a href="#">Hepatobiliary Surgery</a>
                  </li>
                  <li>
                    <a href="#">Uro Oncology</a>
                  </li>
                  <li>
                    <a href="#">Bone & Soft Tissue Tumors</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" class="appointment-btn scrollto">
            <span class="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
