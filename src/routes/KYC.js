import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Banner from '../components/Banner';
import { DashNavbar, LogoNavbar } from '../components/Nav';
import SuccessCard from '../components/SuccessCard';
import {
  AddressInfoForm,
  BusinessInfoForm,
  DirectorInfoForm,
  DocumentsForm,
  ServicesForm,
} from '../components/Forms';
import { setModalShow } from '../store/slices/application';

import './../assets/styles/icons.css';
import './../assets/styles/universalStyles.css';
import './../assets/styles/KYC.css';

export default function KYCPage() {
  const [activeKey, setActiveKey] = useState('dInfo');
  const { modalShow } = useSelector((store) => store.postApp);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (store) => store.user.currentUser.isAuthenticated
  );

  return (
    <div className="ff-averta">
      {isAuthenticated ? (
        <>
          <DashNavbar />
          <main>
            <Banner />
            <Container className="py-3">
              <Row>
                <Col className="px-4 py-2">
                  <p className="fw-bold h5">KYC Information</p>
                  <Tab.Container
                    id="left-tabs-example"
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(key)}
                  >
                    <Row className="bg-light p-4 rounded">
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="dInfo">
                              Director's Information
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="bInfo">
                              Business Information
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="aInfo">
                              Address Information
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="sInfo">
                              Services Selection
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="docs">Documents</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content className="border border-secondary rounded p-3 mt-2">
                          <Tab.Pane eventKey="dInfo">
                            <DirectorInfoForm setActiveKey={setActiveKey} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="bInfo">
                            <BusinessInfoForm setActiveKey={setActiveKey} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="aInfo">
                            <AddressInfoForm setActiveKey={setActiveKey} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="sInfo">
                            <ServicesForm setActiveKey={setActiveKey} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="docs">
                            <DocumentsForm setActiveKey={setActiveKey} />
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Col>
              </Row>
            </Container>

            <SuccessCard
              show={modalShow}
              onHide={() => dispatch(setModalShow(false))}
            />
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
