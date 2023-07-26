import { createPortal } from "react-dom";
import { THandlerModelClose } from "../../data/typesScripts";
import styles from "./modal-overlay.module.css";

const modalRoot = document.body;

type TModalOverlay = {
  children: React.ReactNode;
  handlerModelClose: (e: THandlerModelClose) => void;
};

const ModalOverlay: React.FC<TModalOverlay> = ({
  children,
  handlerModelClose,
}) => {
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

export default ModalOverlay;
