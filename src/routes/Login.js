import { Container } from 'react-bootstrap';

import './../assets/styles/universalStyles.css';

import { NavBar } from './../components/Nav';
import { LoginForm } from '../components/Forms';

export default function LoginPage() {
  return (
    <div className="ff-averta bg-login-pic">
      <NavBar />
      <main className='vh-95'>
        <div className="w-100 py-4 pt-5">
          <Container className="d-flex align-content-center flex-wrap pt-5">
            <div className="d-flex flex-column-reverse justify-content-between align-items-center login-inner-container pt-5">
              <p className="h3 text-white text-center fw-bold pt-5 login-text">
              Access your personalized healthcare insights anytime, anywhere
              </p>
              <div className="w-75 d-flex flex-column align-items-end">
                <div className="login-form py-3 px-4 rounded">
                  <p className="h4 fw-bold text-charcoal pb-1">Login</p>
                  <LoginForm />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}

