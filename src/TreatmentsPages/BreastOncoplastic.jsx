import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";

const BreastOncoplastic = () => {
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
          <h2>Breast Oncoplastic Surgery </h2>
        </div>
      </section>
    </div>
  );
};

export default BreastOncoplastic;
