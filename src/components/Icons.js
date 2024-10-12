import { Image } from "react-bootstrap";

export default function Icon({name, width}) {
  return (
    <Image
      src={name}
      width={width}
      alt={name}
    />
  );
}
