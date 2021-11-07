import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

const Header = () => {
  const [className, setClassName] = useState(false);
  const [toggle, setToggle] = useState(false);
  let data = Number(localStorage.getItem("posts"));
  let data1 = Number(localStorage.getItem("services"));

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setClassName(true);
    } else {
      setClassName(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  const handleClick = () => {
    console.log("handle clicked called");
    setToggle(!toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <>
      <div
        id="topbar"
        className={
          className
            ? "d-flex align-items-center fixed-top topbar-scrolled"
            : "d-flex align-items-center fixed-top"
        }
      >
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

      <header
        id="header"
        className={className ? "fixed-top header-scrolled" : "fixed-top"}
      >
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </h1>

          <nav
            id="navbar"
            className={
              toggle
                ? "navbar navbar-mobile order-last order-lg-0"
                : "navbar order-last order-lg-0"
            }
          >
            <ul>
              <li>
                <a
                  class="nav-link scrollto active"
                  onClick={handleClose}
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#doctors"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#treatments"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#doctors"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Specialist In</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <Link to="#" onClick={handleClose}>Oral Cancer Suregery</Link>
                  </li>

                  <li>
                    <a href="#" onClick={handleClose}>
                      Laryngeal Surgery
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Breast Oncoplastic Surgery
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Thoracic Oncology
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Gynae Oncology
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Gastrointestinal Oncology
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Hepatobiliary Surgery
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Uro Oncology
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleClose}>
                      Bone & Soft Tissue Tumors
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="nav-link scrollto"
                  onClick={handleClose}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <i
              className={
                toggle
                  ? "bi bi-x mobile-nav-toggle"
                  : "bi bi-list mobile-nav-toggle"
              }
              onClick={handleClick}
            ></i>
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
