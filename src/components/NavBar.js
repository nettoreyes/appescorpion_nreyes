import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">
        <CartWidget imagen="logo" />
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
    </Navbar>
  );
};

export default NavBar;
