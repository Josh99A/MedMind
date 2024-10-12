import { Container, Button } from 'react-bootstrap';
import { NavBar } from './../components/Nav';
import { MainFooter } from './../components/Footer';

import ServiceCard from '../components/Tabs';

export default function ProductsPage() {
  return (
    <div className="ff-averta">
      <NavBar />
      <main>
        <div className="pdts-background"></div>
        <Container>
          <p className="h1 fw-bolder pt-4 pb-3">Our Products</p>

          <div className="d-flex flex-column explore-container px-4 py-1">
            <div className="">
              <p>
                Explore varieties of innovative products and solution for your
                business need.
              </p>
            </div>
            <div>
              <Button
                href="/login"
                className="rounded-pill bg-light-navy-blue w-100 px-5"
              >
                Get Started
              </Button>
            </div>
          </div>

          <hr />

          <div className="d-flex flex-wrap justify-content-center">
            <ServiceCard
              name="Autopay"
              description="Autopay is a fast & secure web/API (Application Programming Interface) based disbursement platform that allows businesses to make single or bulk payments anytime,anywhere."
            />
            <ServiceCard
              name="Quickteller Web"
              description="Quickteller Web (QT WEB) is an API for bill payments for those with an agent
              network or their own channel for B2B clients."
            />
            <ServiceCard
              name="Interswitch Payment Gateaway (IPG)"
              description="IPG is an internet-based
              collections solution that offers end-to-end intergration of
              all transactions, including cardless ones. With IPG,
              business owners enjoy instant transfer of value to multiple
              accounts, settled within 24hrs."
            />
            <ServiceCard
              name="Cross Selling"
              description=" The other services include; Utility Bill payments, Airtime, Data & School Fees"
            />
          </div>
        </Container>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
