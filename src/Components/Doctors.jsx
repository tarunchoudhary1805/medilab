import React from "react";
import docter1 from "../img/shamsuddin.jpg";
import doctor2 from "../img/bijal.jpg";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <>
      <section id="doctors" class="doctors">
        <div class="container">
          <div class="section-title">
            <h2>Doctors</h2>
            <p></p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <Link to="/dr_shamshuddin">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src={docter1} class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Dr. Shamsuddin J. Virani</h4>
                    {/* <span>M.S.</span> */}
                    <p style={{ color: "#000" }}>
                      M.S. DNB Surgical Oncology, <br /> (Consulting
                      Oncosurgeon)
                    </p>
                    {/* <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div> */}
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <Link to="/dr_bijal">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img src={doctor2} class="img-fluid" alt="" />
                  </div>
                  <div class="member-info">
                    <h4>Dr. Bijal S. Virani</h4>
                    {/* <span>Anesthesiologist</span> */}
                    <p style={{ color: "#000" }}>
                      M.D. Anaesthesiology, <br />
                      Fellowship in pain & Palliative care,
                      <br />
                      (Pain & Palliative care consultant & Anaesthesiologist)
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
