import React from "react";

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="glightbox play-btn mb-4"
              ></a>
            </div>

            <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>
                “No cancer patient should deny treatment in any circumstances”
                will be my final goal.
              </h3>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-fingerprint"></i>
                </div>
                <h4 class="title">
                  {/* <a href="">Lorem Ipsum</a> */}
                </h4>
                <p class="description">
                  Being in field of Surgical Oncology my aim is to provide high
                  quality surgical care to all my cancer patients based on
                  recent updates in oncology with excellent oncological as well
                  as functional outcome comparable to high class international
                  standards.
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-gift"></i>
                </div>
                <h4 class="title">
                  {/* <a href="">Nemo Enim</a> */}
                </h4>
                <p class="description">
                  My aim is to provide all supportive care beyond just only
                  surgical care including all types of rehabilitation that every
                  cancer patients again ready to take challenges of their life.
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-atom"></i>
                </div>
                <h4 class="title">
                  {/* <a href="">Dine Pad</a> */}
                </h4>
                <p class="description">
                  There are so many myths regarding cancer and its treatment in
                  our indian society. So my ultimate purpose in oncology to
                  educate all people regarding basics of cancer and how to fight
                  against cancer that it can translate into less suffering to
                  cancer patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="counts" class="counts">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i class="fas fa-user-md"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="85"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Doctors</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="far fa-hospital"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="18"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Departments</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-flask"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="12"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Research Labs</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="fas fa-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
