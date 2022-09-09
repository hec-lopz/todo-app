import { useState } from "react";
import { Modal } from "./Modal";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

const FORM = {
  SIGN_UP: "signup",
  SIGN_IN: "signin",
};

export const Authentication = () => {
  const [showModal, setShowModal] = useState(true);
  const [shownForm, setShownForm] = useState(FORM.SIGN_UP);

  const onClose = () => setShowModal((prev) => !prev);
  const switchForm = () => {
    if (shownForm === FORM.SIGN_UP) {
      setShownForm(FORM.SIGN_IN);
    } else {
      setShownForm(FORM.SIGN_UP);
    }
  };

  if (!showModal) return null;
  return (
    <Modal onClose={onClose}>
      {shownForm === FORM.SIGN_UP && <SignUpForm switchForm={switchForm} />}
      {shownForm === FORM.SIGN_IN && <SignInForm switchForm={switchForm} />}
    </Modal>
  );
};
