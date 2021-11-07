import React from "react";
import { Link } from "react-router-dom";
import "../Shared/css/style.css";
import bijal from "../img/bijal1.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router";

const DoctorBijal = () => {
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
          <h2> Dr. Bijal S. Virani </h2>
        </div>
      </section>
      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div className="text-left">
            <img src={bijal} alt="" />
          </div>
          <div className="text-left">
            <h3 className="text-secondary">
              <span className="text-dark">
                {" "}
                <br /> Dr. Bijal S. Virani
              </span>{" "}
              <br />
            </h3>
            <h6>
              {" "}
              M.D. (Anaesthesiology) <br /> Fellowship in Pain & Palliative Care
              (IAPC) <br />
              Specialist in Cancer Pain & Supportive Care
            </h6>
          </div>
          <br />
          <div className="text-left">
            <ul style={{ listStyleType: "square" }}>
              <li>
                She has done MBBS from Government Medical College, Surat and MD
                Anaesthesiology from SMIMER,Surat. <br />
              </li>
              <li>
                Then she has done basic and advanced fellowship in Pain and
                Palliative Care at Bhagwan Manager Cancer Hospital and research
                centre,Jaipur.. <br />
              </li>
              <li>
                She is a life member of Indian Association of Palliative Care
                (IAPC) & Working as a consulting Anaesthesiologist & Pain &
                Pallative Care Consultant at Bharat Cancer Hospital & Lions
                Cancer Detection centre, Surat. <br />{" "}
              </li>
              <li>
                {" "}
                She is the only pain and Palliative care consultant in whole
                south gujarat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBijal;
