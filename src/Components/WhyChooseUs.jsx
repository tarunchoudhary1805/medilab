import React from "react";
import robotics from "../img/robotic.png";
import liver from "../img/liver.png";
import surgery from "../img/surgeries.png";

const WhyChooseUs = () => {
  return (
    <>
      <section id="why-us" class="why-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="content">
                <h3>Why Choose Kiran Hospital?</h3>
                <p>
                  Kiran Hospital is now one of the first hospitals from India to
                  get appreciated for World Class Healthcare services in field
                  of Bariatric Surgery for Weight Loss by Bariatric Times
                  <br />
                  <br />
                  Bariatric Times, internationally acclaimed journal from
                  Pennsylvania, USA on bariatric trends, research, developments
                  utilized in the treatment of obesity and metabolic disorders.
                </p>
                {/* <div class="text-center">
                  <a href="#" class="more-btn">
                    Learn More <i class="bx bx-chevron-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img src={robotics} alt="" />
                      <h3 className="text-danger">
                        {" "}
                        <b>14435+</b>{" "}
                      </h3>
                      <h3 className="text-danger">Cardiac Procedure</h3>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img src={liver} alt="" />
                      <h3 style={{ color: "#ff5a00" }}>
                        {" "}
                        <b>1400000+</b>{" "}
                      </h3>
                      <h3 style={{ color: "#ff5a00" }}>Patient's Visited</h3>
                    </div>
                  </div>
                  <div class="col-xl-4 d-flex align-items-stretch">
                    <div class="icon-box mt-4 mt-xl-0">
                      <img src={surgery} alt="" />
                      <h3 className="text-success">
                        {" "}
                        <b>89645+</b>{" "}
                      </h3>
                      <h3 className="text-success">Surgeries</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
