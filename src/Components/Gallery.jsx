import React from "react";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery03_small.jpg";
import gallery4 from "../img/gallery04_small.jpg";
import gallery5 from "../img/gallery05_small.jpg";
import gallery6 from "../img/gallery06_small.jpg";
import gallery7 from "../img/gallery07_small.jpg";
import gallery8 from "../img/gallery08_small.jpg";

const Gallery = () => {
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
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-1.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery1} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-2.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery2} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-3.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery3} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-4.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery4} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-5.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery5} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-6.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery6} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a
                  href="assets/img/gallery/gallery-7.jpg"
                  class="galelry-lightbox"
                > */}
                <img src={gallery7} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                {/* <a href={`${gallery8}`} class="galelry-lightbox"> */}
                <img src={gallery8} alt="" class="img-fluid" />
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
