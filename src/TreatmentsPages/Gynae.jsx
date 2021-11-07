import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Gynae;
