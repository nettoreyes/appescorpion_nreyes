import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Image from "react-bootstrap/Image";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">
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
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            
            <Nav.Link href="/category/1">Categoria 1</Nav.Link>
            <Nav.Link href="/category/2">Categoria 2</Nav.Link>
            <Nav.Link href="/category/3">Categoria 3</Nav.Link>
            <Nav.Link href="/category/4">Categoria 4</Nav.Link>
            
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
