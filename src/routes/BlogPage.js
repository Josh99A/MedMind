import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './../assets/styles/BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How MedMind Improves Healthcare Access",
      description: "Discover how MedMind is transforming healthcare accessibility for underserved communities.",
      imageUrl: "blog-image1.jpg", // Replace with actual image URLs
      link: "#",
    },
    {
      id: 2,
      title: "The Role of AI in Healthcare",
      description: "Learn about the integration of AI in medical predictions and recommendations at MedMind.",
      imageUrl: "blog-image2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "MedMind’s Vision for Chronic Disease Management",
      description: "Find out how MedMind helps manage chronic conditions like diabetes, hypertension, and more.",
      imageUrl: "blog-image3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="blog-page">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">MedMind</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <Container>
          <h1 className="hero-title">Welcome to MedMind Blog</h1>
          <p className="hero-subtitle">Stay updated with the latest in healthcare innovation, AI, and how MedMind is making a difference in patient care.</p>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="blog-section py-5">
        <Container>
          <Row>
            {blogPosts.map((post) => (
              <Col key={post.id} xs={12} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button variant="primary" href={post.link}>Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section text-center py-4">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 MedMind. All Rights Reserved.</p>
              <Nav className="justify-content-center">
                <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                <Nav.Link href="#terms">Terms of Service</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default BlogPage;
