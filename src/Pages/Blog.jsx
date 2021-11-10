import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import { useLocation } from "react-router";

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
                      className="d-flex image"
                      style={{ alignItems: "center" }}
                    >
                      {/* <img src={heroImg} className="card-img mr-2 " alt="..." /> */}
                      {/* <div>
                        <h4>HeaveN Real Estate</h4>
                        <p
                          style={{
                            fontSize: "12px",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {moment(item.created_at).fromNow()}
                        </p>
                      </div> */}
                    </div>{" "}
                    <div> </div>
                    {/* <div className="d-flex"></div> */}
                  </h5>
                </div>
                <div className="">
                  <div className=" w-50 mx-auto mb-5">
                    <img
                      src={item.img}
                      className=" img card-img-top  "
                      alt="..."
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                  <div className=" mx-2">
                    <h3>
                      <b>{item.title}</b>
                    </h3>
                    <p className="card-text p-1 para  ">
                      {!readmore && item.description.length > 40
                        ? `${ReactHtmlParser(
                            item.description.slice(0, 40)
                          )}. . .`
                        : ReactHtmlParser(item.description)}
                      <a
                        onClick={() => setReadmore(!readmore)}
                        className="btn text-dark"
                        style={{ border: "none", outline: "none" }}
                      >
                        {item.description.length > 100 &&
                          `${!readmore ? "Read More" : "Read Less"}`}
                      </a>
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
