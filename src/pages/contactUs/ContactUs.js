import React, { useState } from "react";
import "./contactUs.css";
export default function ContactUs() {
  const initData = { name: "", phone: "", email: "", message: "" };
  const [state, setstate] = useState(initData);

  // on change
  const handleFormChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setstate(initData);
  };
  // main return
  return (
    <div className="contact_us">
      <h1 className="heading">Contact Us</h1>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className="inputcontainer">
          <div className="inputcontainer1">
            <input
              class="input-text1"
              name="name"
              autoFocus
              placeholder="Name"
              value={state.name}
            />
            <input
              class="input-text1"
              name="email"
              placeholder="Email"
              value={state.email}
            />
            <input
              class="input-text1"
              name="phone"
              placeholder="Phone"
              value={state.phone}
            />
          </div>
          <div className="inputcontainer2">
            <input
              class="input-text2"
              name="message"
              placeholder="Notes"
              value={state.message}
            />
          </div>
          <div className="submit">
            <button type="submit" class="submit_btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
