import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import './../assets/styles/UserProfile.css';

const UserProfile = () => {
  // Example data for user history (can be fetched from an API)
  const history = [
    { date: '2024-10-01', result: 'Diabetes Risk - Low', details: 'Blood Sugar Levels Normal' },
    { date: '2024-09-25', result: 'Hypertension Risk - Moderate', details: 'Consult Doctor' },
    { date: '2024-09-10', result: 'Common Cold - Managed', details: 'Rest and Hydrate' }
  ];

  return (
    <div className="user-profile-page">
      {/* Profile Header */}
      <section className="profile-header py-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-center">
              <img src="profile-pic.jpg" alt="User" className="rounded-circle profile-img" />
            </Col>
            <Col xs={12} md={9}>
              <h2 className="user-name">Natasha Tindy</h2>
              <p className="user-email">tindynatasha@example.com</p>
              <p className="user-info">MedMind Member since 2023 | Regular User</p>
              <Button variant="primary" className="mt-3" href="#">Edit Profile</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Interaction History Section */}
      <section className="interaction-history py-5">
        <Container>
          <h3 className="text-center mb-4">Your Interaction History</h3>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Result</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {history.map((interaction, index) => (
                <tr key={index}>
                  <td>{interaction.date}</td>
                  <td>{interaction.result}</td>
                  <td>{interaction.details}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </section>

      {/* New Instance Button */}
      <section className="new-instance py-5 text-center">
        <Container>
          <h3>Start a New Health Check</h3>
          <p>Click the button below to enter your latest medical information and receive AI-powered health predictions.</p>
          <Button variant="success" size="lg">New Instance</Button>
        </Container>
      </section>
    </div>
  );
};

export default UserProfile;
