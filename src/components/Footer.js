import { Container, Image } from 'react-bootstrap';
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './../assets/styles/universalStyles.css';
import './../assets/styles/Footer.css';
import './../assets/styles/icons.css';

import MedMindLogo from './../assets/images/Logo_medmind.PNG';

function MainFooter() {
  return (
    <div className='pros-container'>
      <Container >
        <footer className="d-flex flex-column flex-wrap justify-content-between align-items-center py-3 my-3 main-footer">
          <ul
            className="nav flex-column align-content-start border-bottom border-1 pb-3 mb-3 footer-list"
            style={{ width: '100%' }}
          >
            <li className="nav-item">
              <a
                href="/blog"
                className="nav-link px-4 text-muted fs-small"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about-us"
                className="nav-link px-4 text-muted fs-small"
                rel="noreferrer"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/support-us"
                className="nav-link px-4 text-muted fs-small"
                rel="noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
          <div className="d-flex flex-column-reverse justify-content-center align-items-center w-100 footer-list">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-md-0 text-muted text-decoration-none lh-1"
              >
                <Image  style={{ width: '200px', height: 'auto' }} src={MedMindLogo} />
              </a>
            </div>
            <p className="my-3 mb-md-0 text-muted fs-x-small">
              © 2024 MedMind Group
            </p>
            <ul className="nav col-md-4 justify-content-evenly list-unstyled d-flex flex-wrap">
              <li className="ms-3">
                <a
                  className="text-muted"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div>
                      <AiFillLinkedin />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div>
                      <FaTwitter />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div>
                      <AiFillFacebook />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div>
                      <AiFillInstagram />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div>
                      <AiFillYoutube />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </div>
  );
}

function DashFooter() {
  return (
    <footer className="footer position-sticky bottom-0 py-3 bg-light">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}

export { MainFooter, DashFooter };
