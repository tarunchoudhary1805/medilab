import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
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

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Doctors Profile</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Treatments</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Facilities</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Gallery</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Specialist In</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Oral Cancer Suregery</a>
                  </li>

                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Laryngeal Surgery</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Breast Oncoplastic Surgery</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Thoracic Oncology</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Gynae Oncology</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Gastrointestinal Oncology</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Hepatobiliary Surgery</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Uro Oncology</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Bone & Soft Tissue Tumors</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Know Us</h4>
                <p>
                  Cancer Patients wiil continually do so, to provid an
                  evidence-based high quality & focased approach to cancer care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright {new Date().getFullYear()}
              <strong>
                <span> Kiran Hospital</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://twitter.com/viranicancer" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/suratcancerhospital"
              class="facebook"
            >
              <i class="bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
