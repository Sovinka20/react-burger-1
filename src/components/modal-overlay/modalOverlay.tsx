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
  const handleOverlay: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      // вот так оверлей проверяется универсально
      handlerModelClose(e);
    }
  };

  return createPortal(
    <div
      data-overlay="overlay"
      className={`${styles.overlay}`}
      //onClick={(e) => handlerModelClose(e)}
      onClick={handleOverlay}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default ModalOverlay;
