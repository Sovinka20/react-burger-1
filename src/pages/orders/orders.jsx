import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../components/order/order";
import { websocketConnect } from "../../services/store/wsOrdersAll/actions";
import { WEBSOCKET_CLOSE } from "../../services/store/wsOrdersAll/reducer2";
import { getWsAllIngridients } from "../../services/store/wsOrdersAll/selectors";
import styles from "./orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      websocketConnect(
        `wss://norma.nomoreparties.space/orders?token=${localStorage
          .getItem("accessToken")
          .substring(localStorage.getItem("accessToken").length - 171)}`
      )
    );
    return () => {
      dispatch({ type: WEBSOCKET_CLOSE });
    };
  }, [dispatch]);

  const getIngredients = useSelector(getWsAllIngridients);

  return (
    <div className={`custom-scroll ${styles.wrapper}`}>
      <main className={styles.feedMain}>
        <section>
          {getIngredients.slice(0, 10).map((item) => {
            return <Order key={item._id} data={item} path={"profile/orders"} />;
          })}
        </section>
      </main>
    </div>
  );
};

export { Orders };
