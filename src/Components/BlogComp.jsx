import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

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
          setBlogs(val);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <>
      <section id="blogs" class="doctors">
        <div class="container">
          <div class="section-title">
            <h2>Blogs</h2>
            <p></p>
          </div>

          <div class="row">
            {blogs?.map((item, i) => (
              <>
                <div class="col-lg-4">
                  <Link to={{ pathname: "/blog", state: item }}>
                    <div class="member d-flex align-items">
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
            <br />
            <br />
            <div className="text-center">
              <button class="btn-primary  mt-4 text-white  btn">
                <Link className="text-white" to="/blogs">
                  Read more Blogs
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComp;
