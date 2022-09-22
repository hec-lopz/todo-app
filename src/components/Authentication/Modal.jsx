import { createPortal } from "react-dom";
import { Overlay, Container, CloseButton } from "../../styles/Modal";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <Overlay />
      <Container>
        <CloseButton onClick={onClose} />
        {children}
      </Container>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
