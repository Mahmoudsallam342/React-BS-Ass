import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar expand="lg" className=" navbar p-4 ">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="text-uppercase fw-bold text-white "
        >
          start-framework
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={"about"}>
              about
            </Nav.Link>
            <Nav.Link as={NavLink} to={"portfolio"}>
              portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to={"contact"}>
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
