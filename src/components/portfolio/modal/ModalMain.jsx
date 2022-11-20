import React from "react";
import ModalOne from "./modal-by-id/ModalOne";
import ModalTwo from "./modal-by-id/ModalTwo";
import ModalThree from "./modal-by-id/ModalThree";
import ModalFour from "./modal-by-id/ModalFour";


const ModalMain = ({ modalId, setGetModal }) => {
  if (modalId === 1) {
    return (
      <ModalOne modalId={modalId} setGetModal={setGetModal} />
    );
  } else if (modalId === 2) {
    return (
      <ModalTwo modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 3) {
    return (
      <ModalThree modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 4) {
    return (
      <ModalFour modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 5) {
    return (
      <ModalFive modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 6) {
    return (
      <ModalSix modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 7) {
    return (
      <ModalSeven modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 8) {
    return (
      <ModalEight modalId={modalId} setGetModal={setGetModal}/>
    );
  } else if (modalId === 9) {
    return (
      <ModalNine modalId={modalId} setGetModal={setGetModal}/>
    );
  }
};

export default ModalMain;
