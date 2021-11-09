import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogComp = () => {
  const [blogs, setBlogs] = useState([{}, {}, {}, {}]);
  return (
    <>
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
            <br /><br />
            <div className="text-center">
              <button class="btn-primary  mt-4 text-white  btn">
                <Link className="text-white" to="/blogs">Read more Blogs</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComp;
