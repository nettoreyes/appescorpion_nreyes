import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Escorpion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Preguntas Frecuentes</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>                
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar
