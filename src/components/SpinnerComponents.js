import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

function ButtonSpinner(props) {
  return (
    <>
      <Button className="rounded-pill col-md-4 my-1" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>
    </>
  );
}

function NormalSpinner(props) {
  const { size, className } = props;
  return (
    <div className={`my-1 ms-2 ${className}`}>
      <Spinner animation="border" size={size} variant="primary" />
    </div>
  );
}

export { ButtonSpinner, NormalSpinner };
