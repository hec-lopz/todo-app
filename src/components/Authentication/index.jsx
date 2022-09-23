import { Modal } from "./Modal";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { FORM } from "../../hooks";

export const Authentication = ({
  showModal,
  onClose,
  shownForm,
  switchForm,
}) => {
  if (!showModal) return null;
  return (
    <Modal onClose={onClose}>
      {shownForm === FORM.SIGN_UP && <SignUpForm switchForm={switchForm} />}
      {shownForm === FORM.SIGN_IN && <SignInForm switchForm={switchForm} />}
    </Modal>
  );
};
