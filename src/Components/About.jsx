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
              <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi. Libero
                laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
              </p>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-fingerprint"></i>
                </div>
                <h4 class="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-gift"></i>
                </div>
                <h4 class="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-atom"></i>
                </div>
                <h4 class="title">
                  <a href="">Dine Pad</a>
                </h4>
                <p class="description">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" class="counts">
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
      </section>
    </>
  );
};

export default About;
