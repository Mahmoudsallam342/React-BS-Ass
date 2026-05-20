import React from "react";
import DarkStar from "../StarDesign/DarkStar";
import Button from "react-bootstrap/Button";
function Contact() {
  return (
    <>
      <div className="contactPage text-center p-5">
        <h1>conatct section</h1>
        <DarkStar />
        <div className="contactInputs   container w-50 p-5">
          <input
            type="text"
            className="border-top-0 border-end-0 border-start-0 p-3 mb-3 w-100"
            placeholder="userName"
          />
          <input
            type="text"
            className="border-top-0 border-end-0 border-start-0 p-3 mb-3  w-100"
            placeholder="userAge"
          />
          <input
            type="email"
            className="border-top-0 border-end-0 border-start-0 p-3 mb-3  w-100"
            placeholder="userEmail"
          />
          <input
            type="password"
            className="border-top-0 border-end-0 border-start-0 p-3 mb-3  w-100"
            placeholder="userPassword"
          />{" "}
          <Button className="contactBtn" type="submit">
            send Message
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;
