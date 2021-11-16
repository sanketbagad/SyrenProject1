import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
const Favourites = () => {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Favourites</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="#deets">Send Feedback</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Favourites
