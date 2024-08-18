import React from 'react';
import { Container, Carousel, Accordion, Card, Button, Row, Col, Form } from 'react-bootstrap';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-background">
      <Container className="mt-4">
        {/* Hero Section */}
        <section className="hero-section text-center mb-5">
          <div className="hero-content">
            <h1>Welcome to Our Furniture Shop</h1>
            <p>Discover the best furniture to make your home cozy and stylish.</p>
            <Button variant="dark" className="mt-3">Shop Now</Button>
          </div>
        </section>

        {/* Carousel */}
        <Carousel className="carousel-container mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/sofa1.jpg')}
              alt="Comfortable Sofa"
            />
            <Carousel.Caption>
              <h3>Comfortable Sofas</h3>
              <p>Explore our range of stylish and comfortable sofas.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/table1.jpg')}
              alt="Modern Table"
            />
            <Carousel.Caption>
              <h3>Modern Tables</h3>
              <p>Discover modern and functional tables for every room.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../../assets/comoda1.jpg')}
              alt="Elegant Storage"
            />
            <Carousel.Caption>
              <h3>Elegant Storage</h3>
              <p>Find elegant storage solutions to keep your space organized.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Cards */}
        <div className="mt-5 d-flex flex-wrap justify-content-center">
          <Card className="custom-card">
            <Card.Img variant="top" src={require('../../assets/trentonSofa1.jpg')} alt="Featured Sofa" />
            <Card.Body>
              <Card.Title>Featured Sofa</Card.Title>
              <Card.Text>
                This modern sofa offers both comfort and style, perfect for any living room.
              </Card.Text>
              <Button variant="dark">View Details</Button>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Img variant="top" src={require('../../assets/graniteTable1.jpg')} alt="Elegant Dining Table" />
            <Card.Body>
              <Card.Title>Elegant Dining Table</Card.Title>
              <Card.Text>
                A stunning dining table that will be the centerpiece of your dining room.
              </Card.Text>
              <Button variant="dark">View Details</Button>
            </Card.Body>
          </Card>

          <Card className="custom-card">
            <Card.Img variant="top" src={require('../../assets/outdoorTable1.jpg')} alt="Outdoor Table" />
            <Card.Body>
              <Card.Title>Outdoor Table</Card.Title>
              <Card.Text>
                A beautiful and durable table perfect for your outdoor space.
              </Card.Text>
              <Button variant="dark">View Details</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Accordion */}
        <Accordion className="mt-5 accordion-custom">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Living Room Furniture</Accordion.Header>
            <Accordion.Body>
              Discover a wide range of living room furniture, including sofas, coffee tables, and TV stands. Our collection combines comfort and style to create a welcoming space for your home.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bedroom Furniture</Accordion.Header>
            <Accordion.Body>
              Explore our selection of bedroom furniture, from beds and nightstands to dressers and wardrobes. Create a peaceful retreat with our beautifully designed pieces.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Office Furniture</Accordion.Header>
            <Accordion.Body>
              Find the perfect office furniture to enhance your productivity. Our range includes desks, office chairs, and storage solutions that blend functionality with contemporary design.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Outdoor Furniture</Accordion.Header>
            <Accordion.Body>
              Transform your outdoor space with our durable and stylish outdoor furniture. Choose from patio sets, loungers, and more to create an inviting area for relaxation and entertaining.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Dining Room Furniture</Accordion.Header>
            <Accordion.Body>
              Browse our collection of dining room furniture, featuring dining tables, chairs, and sideboards. Our pieces are designed to bring elegance and functionality to your dining experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Kids' Furniture</Accordion.Header>
            <Accordion.Body>
              Check out our selection of kids' furniture, including beds, desks, and storage solutions. Our pieces are crafted to be both safe and fun, perfect for your little ones.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Testimonials */}
        <section className="testimonials-section text-center mt-5">
          <h2>What Our Customers Say</h2>
          <Row className="mt-4">
            <Col md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <Card.Text>
                    "Amazing quality and fast delivery. My living room looks fantastic with the new sofa!"
                  </Card.Text>
                  <footer className="blockquote-footer">John Doe</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <Card.Text>
                    "I love my new dining table. It's elegant and fits perfectly in my home."
                  </Card.Text>
                  <footer className="blockquote-footer">Jane Smith</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="custom-card">
                <Card.Body>
                  <Card.Text>
                    "The outdoor furniture set is durable and stylish. Perfect for my backyard!"
                  </Card.Text>
                  <footer className="blockquote-footer">Emily Johnson</footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Newsletter Subscription */}
        <section className="newsletter-section text-center mt-5">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest products and special offers.</p>
          <Form className="d-flex justify-content-center mt-3">
            <Form.Control type="email" placeholder="Enter your email" className="w-50 me-2" />
            <Button variant="dark">Subscribe</Button>
          </Form>
        </section>
      </Container>
    </div>
  );
}

export default HomePage;



