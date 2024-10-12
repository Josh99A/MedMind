import Button from "react-bootstrap/Button";
import './../assets/styles/Buttons.css'

function RoundedButton({ label, className, buttonType }) {
  return (
    <>
      <Button
        className={[className, 'base-button-style', 'rounded-pill']} type={buttonType}
      >
        {label}
      </Button>
    </>
  );
}

export { RoundedButton };
