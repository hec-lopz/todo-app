import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Overlay, Container, CloseButton } from "../styles/Modal";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <Overlay />
      <Container>
        <Link to="/">
          <CloseButton onClick={onClose} />
        </Link>
        {children}
      </Container>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
