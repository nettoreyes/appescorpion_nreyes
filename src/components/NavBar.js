import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Image from "react-bootstrap/Image";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
          <Image
            src={logo}
            alt="Logo"
            height="80"
            className="d-inline-block align-top mx-3"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Productos</Nav.Link>
            <Nav.Link href="#link3">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="justify-content-end mx-3">
          <CartWidget imagen="carro" />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
