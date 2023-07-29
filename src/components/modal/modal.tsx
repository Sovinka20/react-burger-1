import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { THandlerModelClose } from "../../data/typesScripts";
import ModalOverlay from "../modal-overlay/modalOverlay";
import styles from "./modal.module.css";

type TModalProps = {
  children: ReactNode;
  handlerModelClose: () => void;
};

const Modal: React.FC<TModalProps> = ({ children, handlerModelClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const closePopup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handlerModelClose();
      }
    };

    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  }, []);

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
