import React from "react";
import { Link } from "react-router-dom";
import "../Shared/css/style.css";
import shamshuddin from "../img/shamshuddin1.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router";

const DoctorShamshuddin = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      {" "}
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Docter Profile</li>
          </ol>
          <h2>Dr. Shamshuddin J. Virani </h2>
        </div>
      </section>
      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div className="text-left">
            <img src={shamshuddin} alt="" />
          </div>
          <div className="text-left">
            <h3 className="text-secondary">
              <span className="text-dark">
                {" "}
                <br /> Dr. Shamsuddin J. Virani
              </span>{" "}
              <br />
            </h3>
            <h6>
              {" "}
              M.S. <br /> DNB (Surgical Oncology) <br /> Consulting Onco Surgeon
            </h6>
          </div>
          <br />
          <div className="text-left">
            <ul style={{ listStyleType: "square" }}>
              <li>
                He had done his M.B.B.S. & M.S. from Govt. Medical College,
                Surat. <br />
              </li>
              <li>
                He had undergone DNB training in Surgical Oncology from Bhagwan
                Mahavir Cancer Centre in Jaipur. <br />
              </li>
              <li>
                He had further training in advanced surgery in Head and Neck
                Oncology at European Institute of Oncology, Milan, Italy. <br />{" "}
              </li>
              <li>
                There he had vast exposure in advanced surgical techniques like
                tongue compartment surgery and microlaryngeal laser surgery.
              </li>
              <li>
                He is working as a consulting Oncosurgeon at Bharat Cancer
                Hospital & Research Centre.
              </li>
              <li>
                He is attached to all major hospitals of Surat & South Gujarat.
              </li>
              <li>
                Dr. Shamsuddin J. Virani is as an oncosurgeon, strives for
                excellence in field of surgical oncology & is doing all kinds of
                cancer surgeries including Minimal Invasive Surgeries, Transoral
                Laser Surgeries & Organ Preservation Surgeries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorShamshuddin;
