import { Container } from "react-bootstrap";

import "./../assets/styles/Banner.css";
import "./../assets/styles/universalStyles.css";

export default function Banner() {
  return (
    <div className="dash-banner">
      <Container className="py-4 d-flex flex-column justify-content-center text-white">
        <p className="h4 pt-2 fw-bolder">KYC Collectibles Uganda</p>
      </Container>
    </div>
  );
}
