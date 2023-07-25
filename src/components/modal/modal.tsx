import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { THandlerModelClose } from "../../data/typesScripts";
import { closeOrderPopup } from "../../services/store/popupOrderRecucer/actions";
import ModalOverlay from "../modal-overlay/modalOverlay";
import styles from "./modal.module.css";

type TModalProps = {
  children: ReactNode;
  handlerModelClose: (e: THandlerModelClose) => void;
};

const Modal: React.FC<TModalProps> = ({ children, handlerModelClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const closePopup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
        dispatch(closeOrderPopup());
      }
    };
    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  });

  return (
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
  );
};

export default Modal;

Modal.propTypes = {
  handlerModelClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
