import React, { useState, useEffect } from "react";

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

        <div class="container-fluid">
          <div class="row no-gutters">
            {item?.map((item) => (
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  {/* <a
                  href="assets/img/gallery/gallery-1.jpg"
                  class="galelry-lightbox"
                > */}
                  <img src={item.img} alt="" class="img-fluid" />
                  {/* </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
