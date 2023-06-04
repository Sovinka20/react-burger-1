import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./modal-overlay.module.css";
const modalRoot = document.body;
//document.getElementById("modal-portal");

const ModalOverlay = ({ children, handlerModelClose }) => {
  return createPortal(
    <div
      data-overlay="overlay"
      className={`${styles.overlay}`}
      onClick={(e) => handlerModelClose(e)}
    >
      {children}
    </div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
};
export default ModalOverlay;
