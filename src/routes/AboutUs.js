import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import missionImg from './../assets/images/Mission.jpg'
import undcommunityImg from './../assets/images/underserverd-communities.jpg'
import growthchartImg from './../assets/images/growthchart.jpg'
import empoweredpatientImg from './../assets/images/empoweredPatient.jpg'
import happyUserImg from './../assets/images/happyblackguy.jpg'


import { NavBar } from '../components/Nav';
import { MainFooter } from '../components/Footer';

import './../assets/styles/AboutUs.css'; // Import custom styles

import { FaApple, FaGooglePlay } from 'react-icons/fa'; // For app store icons
import PartnersSlider from '../components/PartnerSlider';

const AboutUs = () => {
  return (
    <div className="about-page">
      <NavBar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <Container fluid>
            <Row className="justify-content-center text-center">
              <Col xs={12} md={8}>
                <h1 className="hero-heading">Revolutionizing Healthcare Access for All</h1>
                <p className="hero-subheading">AI-powered insights and expert-validated care, available anywhere, anytime.</p>
                <Button variant="primary" size="lg">Learn More About Us</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Our Mission Section
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <h2>Our Mission</h2>
              <p>At MedMind, we are bridging the gap in healthcare access by providing reliable, AI-powered medical advice validated by certified doctors.</p>
            </Col>
            <Col xs={12} md={6}>
              <div className="icon-grid">
                <div className="icon-item">
                  <img src="health-icon.png" alt="Health Icon" className="img-fluid" />
                </div>
                <div className="icon-item">
                  <img src="ai-icon.png" alt="AI Icon" className="img-fluid" />
                </div>
                <div className="icon-item">
                  <img src="doctor-icon.png" alt="Doctor Icon" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}


<div className="about-page">
      
      {/* Mission Section */}
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <h2 className="section-heading">Our Mission</h2>
              <p className="section-description">At MedMind, we are committed to providing reliable, AI-powered medical advice, validated by certified doctors, to people in underserved communities. Our goal is to empower patients with trustworthy healthcare information, wherever they are.</p>
            </Col>
            <Col xs={12} md={6}>
              <img src={missionImg} alt="Mission" className="img-fluid mission-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="goals-section py-5">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Key Goals</h2>
          <Row className="goal-items">
            <Col xs={12} md={4} className="mb-4">
              <Card className="goal-card">
                <Card.Body>
                  <h5 className="goal-title">Increase Healthcare Access</h5>
                  <p className="goal-description">Expand healthcare access to underserved and rural communities by providing instant, reliable medical advice through AI-powered solutions.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="goal-card">
                <Card.Body>
                  <h5 className="goal-title">Build Trust & Credibility</h5>
                  <p className="goal-description">Collaborate with hospitals, health centers, and certified doctors to ensure that all AI-driven recommendations are validated and trusted.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="goal-card">
                <Card.Body>
                  <h5 className="goal-title">Facilitate Remote Care</h5>
                  <p className="goal-description">Introduce transportation services and offline solutions for users in remote areas, ensuring they have access to healthcare even without internet connectivity.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* App Download Section */}
      <section className="download-section py-5">
        <Container className="text-center">
          <h2 className="section-heading">Download MedMind Now</h2>
          <p className="section-description text-white">Get access to reliable medical advice right at your fingertips. Download the MedMind app from the Google Play Store or the Apple App Store today.</p>
          <div className="store-buttons">
            <Button variant="dark" size="lg" className="me-2">
              <FaGooglePlay className="me-2" /> Google Play
            </Button>
            <Button variant="dark" size="lg">
              <FaApple className="me-2" /> App Store
            </Button>
          </div>
        </Container>
      </section>
    </div>
  

      {/* Challenge & Solution Section */}
      <section className="challenge-solution-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <img src={undcommunityImg} className="img-fluid" alt="Rural Area" />
            </Col>
            <Col xs={12} md={6}>
              <h2>The Challenge</h2>
              <p>Millions of people in underserved communities don’t have immediate access to healthcare. MedMind addresses this issue with AI-powered solutions and expert validation.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section py-5">
        <Container>
          <h2 className="text-center">The MedMind Impact</h2>
          <Row className="mt-4">
            <Col xs={12} md={4} className="mb-4">
              <Card className="impact-card">
                <Card.Img variant="top" src={growthchartImg} className="img-fluid" />
                <Card.Body>
                  <Card.Text>
                    Over 65% of users reported receiving accurate medical assessments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="impact-card">
                <Card.Img variant="top" src={happyUserImg} className="img-fluid" />
                <Card.Body>
                  <Card.Text>
                    Prevented unnecessary clinic visits and improved patient confidence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="impact-card">
                <Card.Img variant="top" src={empoweredpatientImg} className="img-fluid" />
                <Card.Body>
                  <Card.Text>
                    Empowered patients with reliable healthcare advice in real-time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision and Goals Section */}
      <section className="vision-goals-section py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Our Vision & Goals</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>Goal 1</h5>
                    <p>Expand healthcare access to underserved areas.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>Goal 2</h5>
                    <p>Partner with hospitals and local health centers for credibility.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h5>Goal 3</h5>
                    <p>Implement transportation services for remote communities.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section
      <section className="partners-section py-5">
        <Container>
          <h2 className="text-center">Building Trust Through Collaboration</h2>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={medicalLogo}  alt="Partner 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={brandNameLogo} alt="Partner 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={healthCareLogo} alt="Partner 3" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section> */}
      <PartnersSlider/>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5">
        <div className="cta-background">
          <Container>
            <h2>Join Us on Our Journey to Revolutionize Healthcare</h2>
           <a href='/signup'><Button variant="success" size="lg">Get Involved</Button></a> 
          </Container>
        </div>
      </section>
      <MainFooter/>
    </div>
  );
};

export default AboutUs;
