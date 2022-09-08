import { createPortal } from "react-dom";
import styled from "styled-components";
import { ReactComponent as CrossIcon } from "../assets/icon-cross.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  padding: 50px;
  max-height: 90vh;
  background-color: ${(props) => props.theme.background.color};
  overflow: auto;
`;
const CloseButton = styled(CrossIcon)`
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: content-box;
  transition: opacity 100ms ease-out;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(-50%, 50%);
`;
export const Modal = ({ children }) => {
  return createPortal(
    <>
      <Overlay />
      <Container>
        <CloseButton />
        {children}
      </Container>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
