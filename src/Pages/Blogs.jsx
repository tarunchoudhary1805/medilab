import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Shared/css/style.css";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://vardaa.herokuapp.com/getAllBlogs"
        );
        const val = await response.json();
        console.log(val);
        if (val) {
          setBlogs(val);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
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
                  <Link to={{ pathname: "/blog", state: item }}>
                    <div class="member d-flex align-items-start">
                      <div class="pix">
                        <img src={item.img} class="img-fluid" alt="" />
                      </div>
                      <div class="member-info">
                        <h4>
                          {item.title.length > 40
                            ? `${item.title.slice(0, 40)}. . .`
                            : item.title}
                        </h4>
                        {/* <span>M.S.</span> */}
                        <p style={{ color: "#000" }}>
                          {item.description.length > 40
                            ? `${ReactHtmlParser(
                                item.description.slice(0, 40)
                              )}. . .`
                            : ReactHtmlParser(item.description)}
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
