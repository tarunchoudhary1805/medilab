import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import { useLocation } from "react-router";
import logo from "../img/logo.png";
import "./Blog.scss";

const Blog = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  console.log(props.location.state);
  const [readmore, setReadmore] = useState(false);
  const [item, setItem] = useState(props.location.state);
  return (
    <div>
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ol>
          <h2> Blog </h2>
        </div>
      </section>

      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          {/* </ */}
          <div class="row gy-1">
            {" "}
            <div className="container my-1 cardd">
              {" "}
              <div className="car my-3 p-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <div
                      className="d-flex image justify-content-left"
                      style={{ alignItems: "center" }}
                    >
                      <img
                        src={logo}
                        className="img-logo "
                        // style={{ width: "30%" }}
                        alt="..."
                      />
                    </div>{" "}
                    {/* <div className="d-flex"></div> */}
                  </h5>
                </div>
                <div className="">
                  <div className=" w-100 mx-auto mb-2">
                    <img
                      src={item.img}
                      className=" img card-img-top  "
                      alt="..."
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div className=" mx-2">
                    {" "}
                    {moment(item.created_at).fromNow()}{" "}
                  </div>{" "}
                  <br />
                  <div className=" mx-2">
                    <h3 className="text-dark">
                      <b>{item.title}</b>
                    </h3>
                    <p className="card-text   para text-secondary  ">
                      {item.short_description}
                    </p>
                    <p className="card-text   para text-secondary  ">
                      {ReactHtmlParser(item.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
