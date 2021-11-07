import React from "react";
import { Link } from "react-router-dom";
import "../Shared/css/style.css";

const DoctorBijal = () => {
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
    </div>
  );
};

export default DoctorBijal;
