import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "../Shared/css/style.css";
import ReadMoreReact from "read-more-react";

const BlogComp = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://vardaa.herokuapp.com/getAllBlogs"
        );
        const val = await response.json();
        console.log(val);
        if (val) {
          setBlogs(val.reverse());
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  let data;
  return (
    <>
      <section id="blogs" class="doctors">
        <div class="container">
          <div class="section-title">
            <h2>Blogs</h2>
            <p></p>
          </div>

          <div class="row">
            {blogs?.slice(0, 3).map((item, i) => (
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
                          alt="card__image1"
                          className="card__image1 img1"
                          width={600}
                          height={300}
                        />
                      </div>
                      <div className="card__body1">
                        <h4>
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
            <br />
            <br />
            <div className="text-center">
              <Link
                className="text-dark btn "
                style={{ textDecoration: "underline" }}
                to="/blogs"
              >
                Read more Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComp;
