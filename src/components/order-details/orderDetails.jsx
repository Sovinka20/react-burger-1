import { useSelector } from "react-redux";
import popupIcon from "../../images/popup-acces-icon.svg";
import { getOrderNumbers } from "../../services/store/orderDetailsReducer/selectors";
import styles from "./order-details.module.css";

const OrderDetails = () => {
  const orderNumber = useSelector(getOrderNumbers);
  return (
    <div className={styles.container}>
      <h3 className="text text_type_digits-large mb-8 mt-30">
        {orderNumber || 0}
      </h3>
      <span className="text text_type_main-medium mb-15">
        идентификатор заказа
      </span>
      <img className="mb-15" src={popupIcon} alt="" />
      <span className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
