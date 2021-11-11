import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submit = async () => {
    console.log(data);
    try {
      const response = await fetch("https://vardaa.herokuapp.com/kiranemail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const value = await response.json();
      console.log(value);
      // if (value) {/
      // setData(value);
      // }
    } catch (error) {
      console.log(error.message);
    }
    setData({ name: "", phone_number: "", subject: "", message: "" });
  };
  return (
    <>
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p></p>
          </div>
        </div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sKiran+Multi+Super+Speciality+Hospital!6i13"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    Kiran Multi Super Speciality Hospital & Research centre,Nr
                    Sumul Dairy, Surat - 395004
                  </p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>drsjvirani@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 98798 55522</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      onChange={handleChange}
                      value={data.name}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="phone_number"
                      onChange={handleChange}
                      value={data.phone_number}
                      placeholder="Contact Number"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    onChange={handleChange}
                    value={data.subject}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    onChange={handleChange}
                    value={data.message}
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div class="text-center">
                  <button type="button" onClick={submit}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
