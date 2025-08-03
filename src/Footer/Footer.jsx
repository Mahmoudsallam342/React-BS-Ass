import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterApp() {
  return (
    <div className="footer">
      <Row className="footer p-5">
        <Col className=" d-flex flex-column justify-content-center align-items-center p-5 text-white">
          <h1>location</h1>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </Col>
        <Col className=" d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="text-white">AROUND THE WEB</h1>
          <div className="socials d-flex ">
            <div className="iconContainer   rounded-circle p-2 me-3 ">
              <i className="fa-brands fa-facebook text-white "></i>
            </div>
            <div className="iconContainer   rounded-circle p-2 me-3">
              <i className="fa-brands fa-twitter text-white "></i>
            </div>
            <div className="iconContainer   rounded-circle p-2 me-3">
              <i className="fa-brands fa-linkedin text-white "></i>
            </div>
            <div className="iconContainer   rounded-circle p-2 me-3">
              <i className="fa-solid fa-globe text-white "></i>
            </div>
          </div>
        </Col>
        <Col className=" d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="text-white">ABOUT FREELANCER</h1>
          <p className="text-white text-center">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </Col>
      </Row>
      <Row className="text-center p-4 text-white copyRight">
        <Col>Copyright © Your Website 2021</Col>
      </Row>
    </div>
  );
}

export default FooterApp;
