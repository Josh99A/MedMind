import { Image, Container } from 'react-bootstrap';

import { LogoNavbar } from '../components/Nav';

import './../assets/styles/universalStyles.css';
import './../assets/styles/PostLogin.css'
import './../assets/styles/icons.css';

import EmailConfiguration from './../assets/images/EmailConfirmation.svg';
import { useEffect, useState } from 'react';

export default function PostLoginPage() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userToken'));
    const email = userData.email;

    setUserEmail(email);
  }, []);

  return (
    <div className="ff-averta">
      <LogoNavbar />
      <main>
        <Container className="mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div className="w-100 p-1 confirm-container">
              <h4 className="fw-bold">Email Confirmation</h4>
              <p>
                We've sent an email to{' '}
                <span className="flickr-blue-text">{userEmail}</span> with a
                link to verify and activate your account.
              </p>
              <h6 className="fw-bold">Didn't get an email?</h6>
              <p className="flickr-blue-text">
                If you didn't get your email from us, here are a few things that
                could have happened.
              </p>
              <ul>
                <li>
                  Check your spam folder. (Sometimes things get lost in there)
                </li>
                <li>
                  The email address has a typo. (This happens to the best of us)
                </li>
                <li>You accidentally gave us a wrong email address.</li>
              </ul>
              <p>
                In case you still cannot find the email, go back to{' '}
                <a href="/login">Login</a>
              </p>
            </div>
            <div className="confirm-container">
              <Image src={EmailConfiguration} className="confirm-image" />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
