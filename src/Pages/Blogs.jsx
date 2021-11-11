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
                <div className="container1 col-lg-4 col-md-6">
                  <Link
                    className="text-dark"
                    to={{ pathname: "/blog", state: item }}
                  >
                    <div className="card1 ">
                      <div className="card__header1">
                        <img
                          src={item.img}
                          alt="card__image"
                          className="card__image1 img1"
                          width={600}
                        />
                      </div>
                      <div className="card__body1">
                        <h4 className="text-dark">
                          <b>{item.title.slice(0, 30)}</b>
                        </h4>
                        <p className="text-secondary">
                          {item.short_description?.length > 40
                            ? `${item.short_description.slice(0, 40)} . . . `
                            : item.short_description}
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
