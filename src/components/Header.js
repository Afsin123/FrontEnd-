import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import About from '../components/About';
import './Header.css';


function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span> INSTANT </span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link  href="about" >
                 About 
                    </Nav.Link>
              
                    <Nav.Link  href="#works">
                Works
                    </Nav.Link>
                    <Nav.Link href="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
