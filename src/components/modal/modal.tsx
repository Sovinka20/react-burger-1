import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { THandlerModelClose } from "../../data/typesScripts";
import { clearIngredient } from "../../services/store/ingredientDetailsReducer/actions";
import { closeOrderPopup } from "../../services/store/popupOrderRecucer/actions";
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
        //navigate("/");
      }
      // navigate("/");
      //  dispatch(closeOrderPopup());
      // }
    };

    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  }, []);

  function handlerModelOverlayClose(e: THandlerModelClose) {
    e.stopPropagation();
    if (e.target.dataset.overlay === "overlay") {
      dispatch(clearIngredient());
      dispatch(closeOrderPopup());

      //    navigate("/");
      handlerModelClose();
    }
  }

  return (
    <ModalOverlay handlerModelClose={handlerModelOverlayClose}>
      <div className={styles.modal}>
        <button
          data-close="close"
          type="button"
          className={styles.icon}
          onClick={handlerModelOverlayClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>
  );
};

export default Modal;
