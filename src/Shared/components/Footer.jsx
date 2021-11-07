import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>KIRAN HOSPITAL</h3>
                <p>
                  <b>
                    {" "}
                    Kiran Multi Super Speciality <br /> Hospital & Research
                    Center
                  </b>{" "}
                  <br /> Kiran Multi Super Speciality <br /> Hospital & Research
                  Center , <br /> Nr Sumul Dairy, Surat - 395004 <br />
                  <br />
                  <strong>Phone:</strong> +91 98798 55522
                  <br />
                  <strong>Email:</strong> drsjvirani@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a className=" scrollto active" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a className=" scrollto" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a className=" scrollto" href="#doctors">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a className=" scrollto" href="#treatments">
                      Treatments
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a className=" scrollto" href="#doctors">
                      Facilities
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a className=" scrollto" href="#gallery">
                      Gallery
                    </a>
                  </li>{" "}
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a className="  scrollto" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Specialist In</h4>
                <ul>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/oral_cancer">Oral Cancer Suregery</Link>
                  </li>

                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/Laryngeal">Laryngeal Surgery</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/BreastOncoplastic">
                      Breast Oncoplastic Surgery
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/Thoracic">Thoracic Oncology</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/Gynae">Gynae Oncology</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/Gastrointestinal">
                      Gastrointestinal Oncology
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/Hepatobiliary">Hepatobiliary Surgery</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/UroOncology">Uro Oncology</Link>
                  </li>
                  <li>
                    {" "}
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/BoneAndSoftTissue">
                      Bone & Soft Tissue Tumors
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Know Us</h4>
                <p>
                  Cancer Patients wiil continually do so, to provid an
                  evidence-based high quality & focased approach to cancer care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright {new Date().getFullYear()}
              <strong>
                <span> Kiran Hospital</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://twitter.com/viranicancer" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/suratcancerhospital"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
