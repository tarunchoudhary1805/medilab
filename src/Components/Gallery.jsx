import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
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
    <>
      <section id="gallery" class="gallery">
        <div class="container">
          <div class="section-title">
            <h2>Gallery</h2>
          </div>
        </div>

        <div class=" container container-fluid">
          <div class="row no-gutters">
            {item?.slice(0, 6).map((item) => (
              <div class="col-lg-4 col-md-4">
                <div class="gallery-item">
                  <Link to={{ pathname: "/image", state: item }}>
                    {" "}
                    <img src={item.img} alt="" class="img-fluid" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              className="text-dark btn "
              style={{ textDecoration: "underline" }}
              to="/images"
            >
              More Images
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
