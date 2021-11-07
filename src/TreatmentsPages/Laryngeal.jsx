import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import lar1 from "../img/laryngeal_surgery01.jpg";
import lar2 from "../img/laryngeal_surgery02.jpg";
import lar3 from "../img/laryngeal_surgery03.jpg";
import lar4 from "../img/laryngeal_surgery04.jpg";

const Laryngeal = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Treatments</li>
          </ol>
          <h2>Laryngeal Surgery </h2>
        </div>
      </section>
      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <p>
            The larynx (voice box) is located at the top of the trachea (the
            windpipe).
          </p>
          <div className="text-center">
            <img src={lar1} className="img-fluid" alt="" />
          </div>
          <br /> <hr />
          <br />
          <p>
            The larynx contains the vocal cords. Vocal cords vibrate and allow
            us talk and sing.
          </p>
          <div className="text-center">
            <img src={lar2} className="img-fluid" alt="" />
          </div>
          <br /> <hr />
          <br />
          With cancer of the larynx (laryngeal cancer), malignant cells grow in
          the tissue of the larynx. Most laryngeal cancers form in squamous
          cells, the flat cells that line the inside of the larynx.
          <br />
          <br />
          <h4>
            <b>Cancer Staging</b>
          </h4>
          Staging the cancer helps doctors decide the prognosis and the best
          treatments to prescribe. Cancer stages are determined by the size and
          the exact location of the tumor. <br />
          <br />
          <section id="faq" class="faq section-bg">
            <div class="container">
              <div class="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i class="bx bx-help-circle icon-help"></i>{" "}
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#faq-list-1"
                    >
                      Radiation Therapy (Radiotherapy)
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-1"
                      class="collapse show"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Radiation therapy stops cancer cells from dividing. The
                        growth of the tumor is slowed. Radiation also destroys
                        cancer cells and can shrink or eliminate tumors.
                        <br />
                        <br />
                        People who are diagnosed with an early stage laryngeal
                        cancer can often be cured with radiotherapy only. This
                        treatment preserves the voice.
                        <br />
                        <br />
                        Radiation alone (without surgery) is successful in
                        treating 80% to 90% of people with stage I laryngeal
                        cancer, and 70% to 80% with stage II cancer.
                        <br />
                        <br />
                        Stage III and IV usually require a combination of
                        radiation and chemotherapy.
                        <br />
                        <br />
                        Radiotherapy may also be given as an additional therapy
                        (adjuvant therapy). Adjuvant therapy is used after
                        surgery:
                        <br />
                        <br />
                        If some cancer cells might still remain in the body{" "}
                        {/* <br /> */}
                        <br />
                        If the tumor was difficult to remove completely <br />
                        {/* <br /> */}
                        When the tumor has penetrated the wall of the larynx{" "}
                        {/* <br /> */}
                        <br />
                        If the pathologist finds cancer cells in the lymph nodes{" "}
                        <br />
                        <br />
                        If the tumor is pressing against the windpipe it can
                        cause pain and difficultly breathing or swallowing.
                        Radiotherapy can relieve the symptoms by shrinking the
                        size of the tumor. Only a short course of treatments is
                        needed to control symptoms (palliation).
                        <br />
                        <br />
                        If the radiotherapy is not able to destroy all the
                        cancer, surgery might be needed to remove the cancer
                        that remains (called salvage surgery).
                        <br />{" "}
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="100">
                    <i class="bx bx-help-circle icon-help"></i>{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-2"
                      class="collapsed"
                    >
                      Chemotherapy
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-2"
                      class="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Medical oncologists administer chemotherapy if the
                        cancer has spread to lymph nodes or other organs. The
                        medicine circulates in the blood and disrupts the growth
                        of the cancer cells. Chemotherapy medications are taken
                        by mouth or given through a vein for several months.
                        <br />
                        <br />
                        <b className="text-danger">
                          Chemotherapy alone cannot cure this type of cancer.
                        </b>{" "}
                        <br />
                        Chemotherapy is prescribed for different reasons: <br />
                        Together with radiotherapy as an alternative to surgery
                        (called chemoradiation) <br />
                        After surgery to decrease the risk of the cancer
                        returning <br />
                        To slow the growth of a tumor and control symptoms when
                        the cancer cannot be cured (palliative treatment).{" "}
                        <br />
                        <br />
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                    <i class="bx bx-help-circle icon-help"></i>{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-3"
                      class="collapsed"
                    >
                      Surgery
                      <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="faq-list-3"
                      class="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <>
                        {" "}
                        <br />
                        <br />
                        Endoscopic laser surgery on the larynx is very
                        effective. In stages I and II, surgery has better or
                        equal cure rates when compared to radiation therapy.
                        <br />
                        <br />
                        <b className="text-danger">
                          {" "}
                          Endoscopic Resection
                        </b>{" "}
                        <br />
                        <br />
                        Endoscopic resection can remove very early cancers of
                        the larynx. General anesthesia is used. The surgeon
                        inserts an endoscope (a tube with a camera and a light
                        on the inside of the tube) into the throat to locate the
                        cancer. Then the surgeon uses a scalpel or a laser to
                        remove the cancerous tissue. A laser is a thin hot beam
                        of light. It cuts tissue and controls bleeding at the
                        same time.
                        <br />
                        <br />
                        Surgery is often the best and only option for large
                        cancers, or cancer that does not respond to radiation
                        treatments.
                        <br />
                        <br />
                        <b className="text-danger">
                          {" "}
                          Partial Laryngectomy
                        </b>{" "}
                        <br />
                        <br />
                        Partial laryngectomy is used to treat small laryngeal
                        cancer, or for cancer that has returned after radiation
                        (recurrent cancer). During partial laryngectomy, only
                        part of the larynx is removed. At least one part of one
                        vocal cord is not removed. After a partial laryngectomy
                        patients can still speak, but the voice might be hoarse
                        or weak. There are different types of partial
                        laryngectomies. Your doctor might use these names:{" "}
                        <br />
                        <br /> A cordectomy is the removal of one vocal cord.{" "}
                        <br /> A frontolateral laryngectomy is the removal of
                        the front of both vocal cords and most of the cancerous
                        cord. <br /> An anterior frontal laryngectomy is the
                        removal of the front of both vocal cords. <br /> A
                        hemilaryngectomy is the removal of one side of the voice
                        box. <br />
                        <br /> During the procedure, the surgeon will make an
                        opening in the neck to the windpipe. This will create a
                        temporary tracheostomy (a hole in the neck for
                        breathing). The tracheostomy allows the larynx to heal
                        after surgery. After healing, the patients usually speak
                        and eat differently.
                        <br />
                        <br />
                        <b className="text-danger">Supraglottic Laryngectomy</b>
                        <br />
                        <br />
                        A supraglottic laryngectomy is used when the tumor is
                        only in the area above the vocal cords. The surgeon will
                        use either the laser or the open technique to remove the
                        voice box structures above the vocal cords (the false
                        vocal cords and the epiglottis).
                        <br />
                        <br />
                        During the procedure, the surgeon will make an opening
                        in the neck to the windpipe. This will create a
                        temporary tracheostomy (a hole in the neck for
                        breathing). The tracheostomy allows the larynx to heal
                        after surgery. After healing, patients usually speak and
                        eat effectively. <br /><br />
                        <div className="text-center">
                          <img src={lar3} className="img-fluid" alt="" />
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br /> <b className="text-danger">
                          Total Laryngectomy
                        </b>{" "}
                        <br />
                        <br />
                        The surgeon may need to remove the entire voice box to
                        cure the cancer. This is called a total laryngectomy.
                        <br />
                        <br />
                        The larynx connects the mouth to the lungs. After the
                        larynx is removed, there is no connection for air to
                        enter the lungs. During the procedure, the surgeon will
                        make an opening in the neck for breathing. The opening
                        is called a tracheotomy or a stoma. The stoma is
                        permanent after a total laryngectomy.
                        <br />
                        <br />
                        Without vocal cords, patients cannot speak in the normal
                        way. One method to help patients speak is the creations
                        of a fistula (a small opening in the tissues for passage
                        of air). The fistula is made during the laryngectomy. A
                        speech therapist can teach different ways to make sounds
                        and help patients learn to speak again <br /> Two weeks
                        after surgery, the patient can eat without difficulty. <br /><br />
                        <div className="text-center">
                          <img src={lar4} className="img-fluid" alt="" />
                        </div>
                        <br />
                        <br /> <hr />
                        <br />
                        <b className="text-danger">Neck Dissection</b> <br />
                        <br />
                        If cancer has affected the lymph nodes in the neck, a
                        neck dissection (removal of the lymph nodes) might be
                        needed during any type of head and neck cancer surgery.{" "}
                        <br />
                        <br />
                      </>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Laryngeal;
