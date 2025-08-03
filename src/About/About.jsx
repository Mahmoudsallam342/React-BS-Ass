import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Star from "../StarDesign/Star";
function About() {
  return (
    <>
      <div className="aboutContent  p-5 vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white fw-bolder text-uppercase text-center p-3">
          about component
        </h1>
        <Star />
        <Container>
          <Row className="p-4">
            <Col className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </Col>
            <Col className="text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
