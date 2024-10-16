import React from 'react';
import undcommunityImg from './../assets/images/underserverd-communities.jpg'
import nurseAiIm from './../assets/images/nurse_with_tab.jpg'
import diseaseManagementIm from './../assets/images/diseasemanagement.jpeg'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} from 'react-bootstrap';
import './../assets/styles/BlogPage.css';
import { MainFooter } from '../components/Footer';
import { NavBar } from '../components/Nav';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How MedMind Improves Healthcare Access',
      description:
        'Discover how MedMind is transforming healthcare accessibility for underserved communities.',
      imageUrl: undcommunityImg , // Replace with actual image URLs
      link: '#',
    },
    {
      id: 2,
      title: 'The Role of AI in Healthcare',
      description:
        'Learn about the integration of AI in medical predictions and recommendations at MedMind.',
      imageUrl: nurseAiIm,
      link: '#',
    },
    {
      id: 3,
      title: 'MedMind’s Vision for Chronic Disease Management',
      description:
        'Find out how MedMind helps manage chronic conditions like diabetes, hypertension, and more.',
      imageUrl:diseaseManagementIm ,
      link: '#',
    },
  ];

  return (
    <div className="blog-page">
      {/* Navbar */}
      <NavBar/>
      {/* <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">MedMind</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <Nav.Link href="/support-us">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <section className="hero-section-blog  text-center py-5">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to the MedMind Blog</h1>
          <p>
            Stay informed with the latest healthcare insights, updates, and AI
            advancements in medical care.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section py-5">
        <Container>
          <Row>
            {blogPosts.map((post) => (
              <Col key={post.id} xs={12} md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button variant="primary" href={post.link}>
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
     <MainFooter/>
    </div>
  );
};

export default BlogPage;
