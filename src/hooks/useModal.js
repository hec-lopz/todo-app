import { useState } from "react";
export const FORM = {
  SIGN_UP: "signup",
  SIGN_IN: "signin",
};
export const useModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [shownForm, setShownForm] = useState(FORM.SIGN_UP);

  const onOpen = (form) => {
    setShownForm(form);
    setShowModal(true);
  };
  const onClose = () => setShowModal(false);
  const switchForm = () => {
    if (shownForm === FORM.SIGN_UP) {
      setShownForm(FORM.SIGN_IN);
    } else {
      setShownForm(FORM.SIGN_UP);
    }
  };
  return {
    showModal,
    shownForm,
    onClose,
    onOpen,
    switchForm,
  };
};
