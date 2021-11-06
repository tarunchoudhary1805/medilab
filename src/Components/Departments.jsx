import React from "react";
import img1 from "../img/oral_cancer.jpg";
import img2 from "../img/laryngeal.jpg";
import img3 from "../img/breast.jpg";
import img4 from "../img/thoracic.jpg";
import img5 from "../img/gynae.jpg";
import img6 from "../img/gastrointestinal.jpg";

const Departments = () => {
  return (
    <>
      <section id="treatments" class="departments">
        <div class="container">
          <div class="section-title">
            <h2>Treatments</h2>
            {/* <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
          </div>

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Oral Cancer Surgery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Laryngeal Surgery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Breast Oncoplastic Surgery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Thoracic Oncology
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Gynae Oncology{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab-6">
                    Gastrointestinal Oncology
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content">
                <div class="tab-pane active show" id="tab-1">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Oral Cancer Surgery</h3>
                      <p class="fst-italic">
                        Oral Cancer Surgery including Tongue Compartment Surgery
                      </p>
                      <p>
                        Oral cancer or mouth cancer, a type of head and neck
                        cancer, is any cancerous tissue growth located in the
                        oral cavity. <br />
                        <br /> There are several types of oral cancers, but
                        around 90% are squamous cell carcinomas, originating in
                        the tissues that line the mouth and lips. <br />
                        <br /> Oral or mouth cancer most commonly involves the
                        tongue. It may also occur on the floor of the mouth,
                        cheek lining, gingiva (gums), lips, or palate (roof of
                        the mouth).
                      </p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img1} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-2">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3> Laryngeal Surgery</h3>
                      <p class="fst-italic">
                        Laryngeal Surgery including transoral laser surgery
                      </p>
                      <p>
                        With cancer of the larynx (laryngeal cancer), malignant
                        cells grow in the tissue of the larynx. Most laryngeal
                        cancers form in squamous cells, the flat cells that line
                        the inside of the larynx.
                      </p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img2} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-3">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Breast Oncoplastic Surgery</h3>
                      <p class="fst-italic">
                        Senology including breast Oncoplastic Surgery
                      </p>
                      <p>
                        It is characterized by uncontolled growth in breast
                        tissues which may arise from lobules which secrte milk
                        or ducts (most common) in which milk flaws.
                        <br />
                        <br />
                        When “controls” in breast cells are not working properly
                        and allows continuous growth then cancer forms. There it
                        forms hard lump or swelling and over the time it
                        increases in size called as localized disease-stage I or
                        II.
                        <br />
                        <br />
                        Over time, cancer cells can invade nearby healthy breast
                        tissue and make their way into the underarm lymph nodes
                        called locoregional disease-stage III.
                        <br />
                        <br />
                        And finally goes to another parts of body via blood like
                        bones,liver,lungs,brain etc, called distant
                        disease-stage IV.
                      </p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img3} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-4">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Thoracic Oncology</h3>
                      <p class="fst-italic">
                        Thoracic Oncology including Esophagus & Lung cancer
                        Surgeries
                      </p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img4} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-5">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Gynae Oncology</h3>
                      <p class="fst-italic">
                        Cancer Patients wiil continually do so, to provid an
                        evidence-based high quality & focased approach to cancer
                        care. With Radiation Therapy centre right on the corner
                        at navsari, we are upgrading our services as a complete
                        set up for diagnosis & treatment.We are responsive to
                        the needs of patients & their families, & as a part of
                        an ongoing modernization program, we are continally
                        upgrading our services & equipments.
                      </p>
                      <p>
                        Cancer Patients wiil continually do so, to provid an
                        evidence-based high quality & focased approach to cancer
                        care. With Radiation Therapy centre right on the corner
                        at navsari, we are upgrading our services as a complete
                        set up for diagnosis & treatment.We are responsive to
                        the needs of patients & their families, & as a part of
                        an ongoing modernization program, we are continally
                        upgrading our services & equipments.
                      </p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img5} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-6">
                  <div class="row">
                    <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>Gastrointestinal Oncology</h3>
                      <p class="fst-italic">Gastrointestinal Oncology</p>
                    </div>
                    <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src={img6} alt="" class="img-fluid" />
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

export default Departments;
