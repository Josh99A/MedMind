import { Card } from "react-bootstrap";

import "./../assets/styles/Banner.css";
import "./../assets/styles/universalStyles.css";

export default function PostKYC(props) {
  return (
    <Card className="pt-2 px-2 pb-3">
      <div className="kyc-info-card">
        <Card.Body>
          <Card.Title className="fw-bold text-center">Welcome John Doe</Card.Title>
          <Card.Text className="d-flex flex-column align-items-center">
            <p>Your business information was submitted Successfully</p>
            <p>You will be contacted in 5 business days with instructions on how to
          proceed.</p>
          <p className="fs-small text-muted">
          In case of any inquiries, please contact Support at:
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">Phone: 0414 897 890</li>
            <li className="list-group-item text-muted">Email: info@support.com</li>
          </ul>
        </p>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
