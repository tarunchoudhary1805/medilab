import React, { useState } from "react";

const Appointment = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    doctor: "",
    message: "",
    appointment_date: "",
    appointment_time: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submit = async () => {
    console.log(data);
    try {
      const response = await fetch(
        "https://vardaa.herokuapp.com/kiranappointment",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const value = await response.json();
      console.log(value);
      // if (value) {/
      // setData(value);
      // }
    } catch (error) {
      console.log(error.message);
    }
    setData({
      name: "",
      email: "",
      phone_number: "",
      doctor: "",
      message: "",
      appointment_date: "",
      appointment_time: "",
    });
  };
  return (
    <>
      <section id="appointment" class="appointment section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Make an Appointment</h2>
            <p></p>
          </div>

          <form role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={data.name}
                  onChange={handleChange}
                />
                <div class="validate"></div>
              </div>
              <div class="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                <div class="validate"></div>
              </div>
              <div class="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  class="form-control"
                  name="phone_number"
                  value={data.phone_number}
                  onChange={handleChange}
                  id="phone"
                  placeholder="Your Phone"
                />
                <div class="validate"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group mt-3">
                <input
                  type="date"
                  name="appointment_date"
                  class="form-control datepicker"
                  id="date"
                  value={data.appointment_date}
                  onChange={handleChange}
                  placeholder="Appointment Date"
                />
                <div class="validate"></div>
              </div>
              <div class="col-md-4 form-group mt-3">
                <input
                  type="time"
                  name="appointment_time"
                  class="form-control datepicker"
                  id="date"
                  value={data.appointment_time}
                  onChange={handleChange}
                  placeholder="Appointment Time"
                />
              </div>
              <div class="col-md-4 form-group mt-3">
                <select
                  name="doctor"
                  id="doctor"
                  onChange={handleChange}
                  value={data.doctor}
                  class="form-select"
                >
                  <option value=""> Doctor</option>
                  <option value="Dr. Shamsuddin J. Virani">
                    Dr. Shamsuddin J. Virani
                  </option>
                  <option value="Dr. Bijal S. Virani">
                    Dr. Bijal S. Virani
                  </option>
                </select>
                <div class="validate"></div>
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                value={data.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message (Optional)"
              ></textarea>
              <div class="validate"></div>
            </div>

            <div class="text-center">
              <button type="button" onClick={submit}>
                Make an Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
