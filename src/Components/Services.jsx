import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Services</h2>
            <p></p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon">
                  <img  />
                </div>
                <h4>
                  <a href="">Oral Cancer Surgery</a>
                </h4>
                <p>including Tongue Compartment Surgery</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fas fa-pills"></i>
                </div>
                <h4>
                  <a href="">Laryngeal Surgery </a>
                </h4>
                <p>including transoral laser surgery</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="fas fa-hospital-user"></i>
                </div>
                <h4>
                  <a href="">Senology</a>
                </h4>
                <p>including breast Oncoplastic Surgery</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fas fa-dna"></i>
                </div>
                <h4>
                  <a href="">Thoracic Oncology </a>
                </h4>
                <p>including Esophagus & Lung cancer Surgeries</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fas fa-wheelchair"></i>
                </div>
                <h4>
                  <a href="">Gynae Oncology</a>
                </h4>
                {/* <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p> */}
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div class="icon-box">
                <div class="icon">
                  <i class="fas fa-notes-medical"></i>
                </div>
                <h4>
                  <a href="">Gastrointestinal Oncology</a>
                </h4>
                <p>
                  {/* Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
