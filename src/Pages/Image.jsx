import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Image = (props) => {
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
            <li>Image</li>
          </ol>
          <h2>Image</h2>
        </div>
      </section>

      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          {/* </ */}
          <div class="row gy-1">
            {" "}
            <div className="container my-1 cardd">
              {" "}
              <div className="car my-3 p-0">
                <div className="">
                  <div className=" w-100 mx-auto mb-2">
                    <img
                      src={item.img}
                      className=" img card-img-top  "
                      alt="..."
                      style={{ borderRadius: "8px" }}
                    />
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

export default Image;
