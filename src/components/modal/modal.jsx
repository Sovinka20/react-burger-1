import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import ModalOverlay from "../modal-overlay/modalOverlay";
import styles from "./modal.module.css";

const Modal = ({ children, handlerModelClose }) => {
  React.useEffect(() => {
    const closePopup = (e) => {
      if (e.key === "Escape") {
        handlerModelClose(e);
      }
    };
    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  }, [handlerModelClose]);

  return (
    <>
      <ModalOverlay handlerModelClose={handlerModelClose}>
        <div className={styles.modal}>
          <button
            data-close="close"
            type="button"
            className={styles.icon}
            onClick={handlerModelClose}
          >
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </ModalOverlay>
    </>
  );
};

Modal.propTypes = {
  handlerModelClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
