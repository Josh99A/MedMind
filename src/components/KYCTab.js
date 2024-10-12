import { FaCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function KYCTab({ label, description }) {
  return (
    <div className="d-flex align-content-center">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <FaCheckCircle />
      </IconContext.Provider>
      <div className="d-flex flex-column align-content-center px-3 justify-items-center">
        <p className=" h6 fw-bold">{label}</p>
        <p className="text-muted fs-x-small">{description}</p>
      </div>
    </div>
  );
}
