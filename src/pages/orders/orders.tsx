import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../components/order/order";
import { websocketConnectProfile } from "../../services/store/wsOrdersAll/actions";
import { WEBSOCKET_CLOSE } from "../../services/store/wsOrdersAll/reducer2";
import { getWsAllIngridients } from "../../services/store/wsOrdersAll/selectors";
import styles from "./orders.module.css";

const Orders = () => {
  const dispatch = useDispatch();
  const tokenLocalStorage: any = localStorage.getItem("accessToken");
  const token = tokenLocalStorage.substring(tokenLocalStorage.length - 171);
  React.useEffect(() => {
    dispatch(
      websocketConnectProfile(
        `wss://norma.nomoreparties.space/orders?token=${token}`
      )
    );
    return () => {
      dispatch({ type: WEBSOCKET_CLOSE });
    };
  }, [dispatch]);

  const getIngredients = useSelector(getWsAllIngridients);
  console.log(getIngredients);
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
