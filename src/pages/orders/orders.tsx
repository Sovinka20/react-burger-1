import { useEffect } from "react";
import { Order } from "../../components/order/order";
import PreloaderComponent from "../../components/preloaderComponent/preloaderComp";
import { useAppDispatch, useAppSelector } from "../../services/store";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_SUCCESS,
} from "../../services/store/wsOrdersAll/actionsProfile";
import styles from "./orders.module.css";

const Orders = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_SUCCESS });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data } = useAppSelector((store) => store.wsOrdersAllReducer);
  return (
    <div className={`custom-scroll ${styles.wrapper}`}>
      <main className={styles.feedMain}>
        {data.success ? (
          <section className={`custom-scroll ${styles.feedInfoSectionLeft}`}>
            {data.orders.reverse().map((order, index) => (
              <Order key={index} data={order} path={"profile/orders"} />
            ))}
          </section>
        ) : (
          <PreloaderComponent />
        )}
      </main>
    </div>
  );
};

export { Orders };
