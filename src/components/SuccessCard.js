import { Button, Image, Modal } from 'react-bootstrap';

import './../assets/styles/Banner.css';
import './../assets/styles/universalStyles.css';

import SubmitSuccess from './../assets/images/Submit-Success.svg';

export default function SuccessCard(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="h-75 py-5 px-5 text-center">
        <h4 className="light-blue-text p-2">Successful</h4>
        <Image src={SubmitSuccess} className="p-2" />
        <p className="fs-small text-muted p-2">
          You will be contacted in 5 business days with instructions on how to
          proceed.
        </p>
        <p className="fs-small text-muted">
          In case of any inquiries, please contact Support at:
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-muted">Phone: 0414 897 890</li>
            <li className="list-group-item text-muted">info@support.com</li>
          </ul>
        </p>
        <Button className="rounded-pill px-3" href="/dashboard">
          Proceed to Dashboard
        </Button>
      </Modal.Body>
    </Modal>
  );
}
