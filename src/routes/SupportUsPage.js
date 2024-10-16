import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import './../assets/styles/SupportUs.css';
import donate from './../assets/images/donate.png'
import { NavBar } from '../components/Nav';
import { MainFooter } from '../components/Footer';

const SupportUsPage = () => {
  return (
    <div className="support-us-page">
      <NavBar />
      {/* Hero Section */}
      <section className="support-hero-section">
        <div className="support-hero-overlay"></div> {/* Dark overlay */}
        <div className="support-hero-content">
          <h1>Support Us</h1>
          <p>
            Help us make healthcare more accessible to everyone by supporting
            MedMind. Your contribution can save lives and bring healthcare to
            underserved communities.
          </p>
        </div>
      </section>
      <section className="why-support-us py-5">
        {/* Why Support Us Section */}
        <Container>
          <Row>
            <Col xs={12} md={6} >
              <img
                src={donate}
                alt="Why Support Us"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center">
              <div>
                <h2>Why Support MedMind?</h2>
                <p>
                  At MedMind, we believe that healthcare is a fundamental right,
                  not a privilege. Your support will help us expand our reach
                  and provide AI-powered healthcare to underserved communities.
                  By backing MedMind, you're contributing to a future where no
                  one is left behind due to lack of access to medical advice.
                </p>
                <p>
                  With your help, we can enhance our services, build stronger
                  partnerships with healthcare providers, and improve the lives
                  of thousands of patients worldwide.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How to Support Us Section */}
      <section className="how-support-us py-5">
        <Container>
          <h2 className="text-center mb-4">How You Can Support Us</h2>
          <Row>
            {/* Donations */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="support-card">
                <Card.Body>
                  <h4>Make a Donation</h4>
                  <p>
                    Your donations help us continue our mission to provide
                    affordable, reliable healthcare solutions through AI
                    technology.
                  </p>
                  <Button variant="primary" href="#">
                    Donate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Partnership */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="support-card">
                <Card.Body>
                  <h4>Partner With Us</h4>
                  <p>
                    Join hands with MedMind to expand our reach, improve
                    healthcare outcomes, and create lasting impact in
                    underserved areas.
                  </p>
                  <Button variant="primary" href="#">
                    Become a Partner
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Volunteer */}
            <Col xs={12} md={4} className="mb-4">
              <Card className="support-card">
                <Card.Body>
                  <h4>Volunteer</h4>
                  <p>
                    Share your skills and time with MedMind. Help us bring
                    healthcare closer to those who need it most.
                  </p>
                  <Button variant="primary" href="#">
                    Volunteer with Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5">
        <Container>
          <h2 className="cta-title">Join Us in Transforming Healthcare</h2>
          <p>
            Whether through donations, partnerships, or volunteering, your
            support helps us reach more patients and save lives. Together, we
            can make healthcare accessible for all.
          </p>
          <Button variant="success" size="lg" href="#">
            Get Involved
          </Button>
        </Container>
      </section>

      {/* Footer */}
      {/* <footer className="footer-section text-center py-4">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 MedMind. All Rights Reserved.</p>
              <a href="#privacy">Privacy Policy</a> |{' '}
              <a href="#terms">Terms of Service</a>
            </Col>
          </Row>
        </Container>
      </footer> */}

      <MainFooter/>
    </div>
  );
};

export default SupportUsPage;
