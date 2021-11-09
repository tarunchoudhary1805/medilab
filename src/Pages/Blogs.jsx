import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Shared/css/style.css";

import { useEffect } from "react";
import { useLocation } from "react-router";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
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
            <li>Blogs</li>
          </ol>
          <h2> Blogs </h2>
        </div>
      </section>
      <section id="blogs" class="doctors">
        <div class="container">
          <div class="section-title">
            <h2>Blogs</h2>
            <p></p>
          </div>

          <div class="row">
            {blogs?.map((item, i) => (
              <>
                <div class="col-lg-6">
                  <Link to="/dr_shamshuddin">
                    <div class="member d-flex align-items-start">
                      <div class="pix">
                        <img
                          src="https://dummyimage.com/600x400/000/fff"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="member-info">
                        <h4>Dr. Shamsuddin J. Virani</h4>
                        {/* <span>M.S.</span> */}
                        <p style={{ color: "#000" }}>
                          M.S. DNB Surgical Oncology, <br /> (Consulting
                          Oncosurgeon)
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
