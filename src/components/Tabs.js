import { Button, Card, Image } from 'react-bootstrap';

import InterswitchColoredLogo from './../assets/images/ISWLogo.svg';

import './../assets/styles/universalStyles.css'
import './../assets/styles/Products.css'

function ServiceCard(props) {
  const { name, description } = props;
  return (
    <>
      <Card className="w-95 mb-3 card-style">
        <Card.Body>
          <Card.Title>
            <Image
              src={InterswitchColoredLogo}
              className="d-inline-block align-top px-1"
              alt="Interswitch"
            />
          </Card.Title>
          <p className="h5 dark-blue-text">{name}</p>
          <Card.Text className='text-justify'>{description}</Card.Text>
          <Button href='/login' className="rounded-pill bg-light-navy-blue mb-0">
            Get Started
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ServiceCard;
