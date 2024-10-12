import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';

import MedMindLogo from './../assets/images/Logo_medmind.PNG';

import './../assets/styles/universalStyles.css';
import './../assets/styles/Nav.css';
import './../assets/styles/icons.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUser } from '../store/slices/user';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={MedMindLogo}
            className="d-inline-block align-top px-3"
            alt="Interswitch"
            style={{ width: '200px', height: 'auto' }}
            fluid
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center  mx-auto">
            <Nav.Link
              className="mx-5 text-bold"
              href="https://www.interswitchgroup.com/uganda/blog"
              target="_blank"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="mx-5 text-bold"
              href="https://www.interswitchgroup.com/uganda/aboutus"
              target="_blank"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="mx-5 text-bold"
              href="https://www.interswitchgroup.com/uganda/consultant"
              target="_blank"
            >
              Support
            </Nav.Link>
            <Nav.Item>
              <Button
                href="/login"
                className="rounded-pill bg-light-navy-blue login-button-style"
              >
                Login
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function DashNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = useSelector(store=> store.user.currentUser.email)
  
  return (
    <header className="border-bottom">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="">
            <Image
              src={MedMindLogo}
              className="d-inline-block align-top"
              alt="Interswitch"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center d-flex flex-row">
              <Nav.Item className="mx-2">
                <Button
                  variant="primary-outline"
                  onClick={() => {
                    dispatch(clearCurrentUser());
                    navigate('/');
                  }}
                >
                  Logout
                </Button>
              </Nav.Item>
              <Nav.Item className='text-primary'>{userEmail}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function LogoNavbar() {
  return (
    <header className="border-bottom">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="border-bottom border-5 border-blue"
      >
        <Container>
          <Navbar.Brand href="/" className="ps-5">
            <Image
              src={MedMindLogo}
              className="d-inline-block align-top "
              alt="Interswitch"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export { NavBar, DashNavbar, LogoNavbar };
