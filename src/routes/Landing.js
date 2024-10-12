import { Image, Container, Button } from 'react-bootstrap';

import { NavBar } from './../components/Nav';
import { MainFooter } from './../components/Footer';
import Icon from '../components/Icons';
import Testimonials from '../components/Testimonials';
import AppDownload from '../components/AppDownload';

import './../assets/styles/icons.css';
import './../assets/styles/Landing.css';
import './../assets/styles/universalStyles.css';

import Safe from './../assets/images/Safe.svg';
import Friendly from './../assets/images/Friendly.svg';
import Easy from './../assets/images/Easy.svg';
import Billers from './../assets/images/Billers.svg';
import Agents from './../assets/images/Agents.svg';
import Businesses from './../assets/images/BusinessesTransacting.svg';
import Cards from './../assets/images/CardsActivated.svg';
import ManWithDevice from './../assets/images/man-with-device.png';
import graph from './../assets/images/Chat.svg';
import personInfo from './../assets/images/person-info.svg';

export default function LandingPage() {
  return (
    <div className="ff-averta bg-white">
      <NavBar />
      <div className="background d-flex align-items-center">
        <Container>
          <div className="w-100 banner-text h-75 mt-5 text-white py-5">
            <p className="h1 fw-bolder">
              Your Health, Powered by AI and Expert Care
            </p>
            <p className="mt-2">
              Experience personalized medical insights at your fingertips.
              MedMind combines advanced AI technology with real doctors to
              provide you with reliable health predictions and expert advice,
              anytime, anywhere
            </p>
            <Button
              href="/login"
              className="rounded-pill bg-light-navy-blue w-50"
            >
              Get Started
            </Button>
          </div>
        </Container>
      </div>
      <div>
        <Container className="pb-3 pt-5">
          <div className="container d-flex flex-column text-center pros-container">
            <div className="pros">
              <Icon name={graph} width={32} />
              <p className="my-3 h6" style={{ fontWeight: 'bold' }}>
                Accurate Diagnoses
              </p>
              <p className="text-muted">
                AI-driven insights validated by real doctors
              </p>
            </div>
            <div className="pros">
              <Icon name={personInfo} width={32} />
              <p className="my-3 h6" style={{ fontWeight: 'bold' }}>
                Personalized Recommendations
              </p>
              <p className="text-muted">
                Tailored healthcare advice based on individual conditions.
              </p>
            </div>
            <div className="pros">
              <Icon name={Easy} width={32} />
              <p className="my-3 h6" style={{ fontWeight: 'bold' }}>
                Convenient Access
              </p>
              <p className="text-muted">
                Receive reliable medical advice anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="my-5 d-flex flex-column align-items-center">
            <p className="h4 text-muted text-center">
              Learn more about our mission, our advanced AI technology, and how
              we bring expert medical care to everyone, everywhere.
            </p>
            <Button
              href="/products"
              className="rounded-pill bg-light-navy-blue w-75 pdtsButton"
            >
              About Us
            </Button>
          </div>
        </Container>
      </div>
      {/* <div className="stats-section">
        <Container className="pt-5 stats-container-div">
          <div className="d-flex flex-column stats-container">
            <div className="">
              <p className="text-left text-muted h4 fw-600">
                Growing business across Africa with innovative products and
                solutions is what we do.
              </p>
              <div className="stats-cards mt-4">
                <div className="stats px-3">
                  <Icon name={Billers} width={32} />
                  <p className="my-3 h5 fw-bold dark-blue-text dark-blue-text">
                    8,000<sup className="blue-munsell-text">+</sup>
                  </p>
                  <p className="text-muted fs-small fs-small">
                    Billers aggregated on the Quickteller platform
                  </p>
                </div>
                <div className="vr"></div>
                <div className="stats px-3">
                  <Icon name={Agents} width={32} />
                  <p className="my-3 h5 fw-bold dark-blue-text">
                    6,600<sup className="blue-munsell-text">+</sup>
                  </p>
                  <p className="text-muted fs-small">
                    Quickteller Paypoint agents enabled across Uganda
                  </p>
                </div>
              </div>
              <div className="stats-cards my-4">
                <div className="stats px-3">
                  <Icon name={Businesses} width={32} />
                  <p className="my-3 h5 fw-bold dark-blue-text">
                    190,000<sup className="blue-munsell-text">+</sup>
                  </p>
                  <p className="text-muted fs-small">
                    Active businesses transacting daily
                  </p>
                </div>
                <div className="vr"></div>
                <div className="stats px-3">
                  <Icon name={Cards} width={32} />
                  <p className="my-3 h5 fw-bold dark-blue-text">
                    22,000,000<sup className="blue-munsell-text">+</sup>
                  </p>
                  <p className="text-muted fs-small">
                    Cards activated on the Verve network
                  </p>
                </div>
              </div>
            </div>
            <div className="w-50 d-md-none d-lg-block">
              <Image src={ManWithDevice} className="man-image" />
            </div>
          </div>
        </Container>
      </div> */}

      <Testimonials />

        <Container className="pt-5 step-section steps-vertical">
          <p className="h4 m-3 text-muted fw-600">How MedMind Works</p>
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Download the App</h3>
            <p>
            Access MedMind from the App Store/Google Play.

            </p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Sign Up/ Login</h3>
            <p>
              Create your account/ Sign in to access personalized health assessments.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Input Symptoms</h3>
            <p>
              Tell us your symptoms, and our AI will analyze your condition.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <h3>Get Advice</h3>
            <p>
              Receive instant health predictions and recommendations from
              doctors.
            </p>
          </div>
        </Container>

        <Container>
        <div className='d-flex justify-content-center align-items-center'>
        <AppDownload/>
        </div>
        </Container>
      

      <div className="py-5">
        <Container>
          <div className="d-flex flex-column align-items-center get-started-container px-5 py-3">
            <div className="w-50">
              <p className="h5 text-muted fw-600">
                Start Geting Expert Medical Advice With MedMind Today
              </p>
              <p className="text-muted fs-small">
              Get AI-powered health insights and expert-backed care, designed to support your well-being at every step.
              </p>
            </div>
            <div>
              <Button
                href="/login"
                className="rounded-pill bg-light-navy-blue my-2 w-100"
              >
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <MainFooter />
    </div>
  );
}
