import { Container } from 'react-bootstrap';

import './../assets/styles/universalStyles.css';
import './../assets/styles/Login.css';

import { NavBar } from './../components/Nav';
import { SignupForm } from '../components/Forms';

export default function SignUpPage() {
  return (
    <div className="ff-averta">
      <NavBar />
      <div className="login-container w-100 h-100 vh-91 p-4">
        <Container>
          <div className="d-flex flex-column-reverse justify-content-between align-items-center mx-auto login-inner-container">
            <p className="h3  text-center fw-bold pt-5 login-text">
            Access your personalized healthcare insights anytime, anywhere
            </p>
            <div className="d-flex flex-column align-items-end">
              <p className="p-1 fw-bold">
                Already have an account?{' '}
                <a href="/login" className="signup-text text-decoration-none">
                  Login
                </a>
              </p>
              <div className="login-form py-3 px-4 w-100 rounded">
                <p className="h4 fw-bold text-charcoal pb-1">
                  Create your account
                </p>
                <SignupForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
