import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Image from "react-bootstrap/Image";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { cantidadProductos } = useContext(CartContext);

  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand as={NavLink} to="/">
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

            <NavLink to="/category/1" className="nav-link">
              Categoria 1
            </NavLink>
            <NavLink to="/category/2" className="nav-link">
              Categoria 2
            </NavLink>
            <NavLink to="/category/3" className="nav-link">
              Categoria 3
            </NavLink>
            <NavLink to="/category/4" className="nav-link">
              Categoria 4
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {cantidadProductos > 0 ? (
          <div className="justify-content-end mx-3">
            <CartWidget imagen="carro" />
          </div>
        ) : (
          ""
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
