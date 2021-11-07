import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import gynae1 from "../img/gynae1.jpg";

const Gynae = () => {
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
          <h2>Gynae Oncology </h2>
        </div>
      </section>
      <div className="container">
        <div
          className="d-flex cardd  my-3"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <div className="text-center">
            <img src={gynae1} alt="" className="img-fluid" />
          </div><br /><br />
          <p>
            Cancer Patients wiil continually do so, to provid an evidence-based
            high quality & focased approach to cancer care. With Radiation
            Therapy centre right on the corner at navsari, we are upgrading our
            services as a complete set up for diagnosis & treatment.We are
            responsive to the needs of patients & their families, & as a part of
            an ongoing modernization program, we are continally upgrading our
            services & equipments.
            <br />
            <br />
            Cancer Patients wiil continually do so, to provid an evidence-based
            high quality & focased approach to cancer care. With Radiation
            Therapy centre right on the corner at navsari, we are upgrading our
            services as a complete set up for diagnosis & treatment.We are
            responsive to the needs of patients & their families, & as a part of
            an ongoing modernization program, we are continally upgrading our
            services & equipments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gynae;
