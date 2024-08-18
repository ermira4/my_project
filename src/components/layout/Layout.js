import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Layout.css';
import { useLocation } from 'react-router-dom';


function Layout({ children }) {
  const location = useLocation();
  
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Conditionally render the image */}
      {location.pathname !== '/' && (
        <div className="header-image">
          
        </div>
      )}

      <Navbar className="navbar-custom" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">My Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action3">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1 mt-5">
        {children}
      </main>

      <footer className="footer">
        <Container>
          <Row>
            <Col className="footer-col">
              <Link to="/aboutus" className="footer-link">
                <h5>About Us</h5>
              </Link>
              <p>Information about the company.</p>
            </Col>
            <Col className="footer-col">
            <Link to="/contactUs" className='footer-link'>
              <h5>Contact</h5>
              </Link>
              <ul>
                <li><a href="mailto:example@example.com">Email</a></li>
                <li><a href="tel:+1234567890">Phone</a></li>
                <li><a href="https://www.google.com/maps/place/Your+Address" target="_blank" rel="noopener noreferrer">Address</a></li>
              </ul>
            </Col>
            <Col className="footer-col">
              <h5>Follow Us</h5>
              <ul className="social-links">
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
 
export default Layout; 



   



