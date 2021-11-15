import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Images = () => {
  const [item, setItem] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://vardaa.herokuapp.com/getAllGallery"
        );
        const val = await response.json();
        console.log(val);
        if (val) {
          setItem(val);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <div>
      {" "}
      <section class="breadcrumbs" style={{ marginTop: "0px" }}>
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Gallery</li>
          </ol>
          <h2> Gallery </h2>
        </div>
      </section>
      <section id="gallery" class="gallery container">
        <div class="container-fluid">
          <div class="row no-gutters">
            {item?.slice(0, 6).map((item) => (
              <div class="col-lg-4 col-md-4">
                <div class="gallery-item">
                  <Link to={{ pathname: "/image", state: item }}>
                    <img src={item.img} alt="" class="img-fluid" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Images;
