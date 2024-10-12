import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

import Banner from '../components/Banner';
import { DashNavbar, LogoNavbar } from '../components/Nav';

import './../assets/styles/universalStyles.css';

import { useSelector } from 'react-redux';
import PostKYC from '../components/PostKYCDash';

export default function DashboardPage() {
  const { kycStatus } = useSelector((style) => style.postApp);
  const isAuthenticated = useSelector(
    (store) => store.user.currentUser.isAuthenticated
  );

  return (
    <div className="ff-averta bg-white vh-100">
      {isAuthenticated ? (
        <>
          <DashNavbar />
          <main>
            <Banner />
            <Container className="py-3">
              <Row>
                <Col sm={3}>
                  <div className="rounded vertical-menu mt-3 py-3">
                    <Card className="no-border">
                      <Card.Body>
                        <Card.Title className="text-center fw-bold">
                          KYC Status
                        </Card.Title>
                        <Card.Text className="text-center py-1">
                          {kycStatus === 'PENDING' ? (
                            <Badge pill bg="secondary">
                              {kycStatus}
                            </Badge>
                          ) : (
                            <Badge pill bg="success">
                              {kycStatus}
                            </Badge>
                          )}
                        </Card.Text>
                        <Card.Text className="text-center">
                          <a href="/kyc" className="text-decoration-none">
                            Begin KYC Capture
                          </a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col sm={9} className="px-5 py-2">
                  <p className="fw-bold h5">KYC Information</p>
                  <div className="bg-light p-4">
                    {kycStatus === 'PENDING' ? (
                      <Card className="pt-2 px-2 pb-3">
                        <div className="kyc-info-card">
                          <Card.Body className="text-center">
                            <Card.Title className="fw-bold">
                              Welcome Partner
                            </Card.Title>
                            <Card.Text className="text-muted">
                              Update your KYC details to enjoy more of our
                              products
                            </Card.Text>
                            <Button
                              className="base-button-style rounded-pill bg-light-navy-blue"
                              href="/kyc"
                            >
                              Begin KYC Capture
                            </Button>
                          </Card.Body>
                        </div>
                      </Card>
                    ) : (
                      <PostKYC />
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
        </>
      ) : (
        <>
          <LogoNavbar />
          <main className="p-5">
            <Container>
              <div className="alert alert-warning text-center">
                <p>Please Login to access this page</p>
                <a href="/login">Login here</a>
              </div>
            </Container>
          </main>
        </>
      )}
    </div>
  );
}
