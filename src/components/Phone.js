import React from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

function Phone() {
  const [number, setNumber] = React.useState('')

  return (
    <>
    <PhoneInput className="form-control" value={number} onChange={setNumber} placeholder='789123456' defaultCountry="UG" />
    </>
  );
}

export default Phone;
