import { useEffect } from "react";
import { Order } from "../../components/order/order";
import PreloaderComponent from "../../components/preloaderComponent/PreloaderComponent";
import { TOrder } from "../../data/typesScripts";
import { useAppDispatch, useAppSelector } from "../../services/store";

import {
  WEBSOCKET_CLOSE,
  WEBSOCKET_OPEN,
} from "../../services/store/wsOrdersAll/actionsFeed";
import styles from "./feed.module.css";

const Feed = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.wsOrdersAllReducer);
  console.log(data);
  useEffect(() => {
    dispatch({ type: WEBSOCKET_OPEN });
    return () => {
      dispatch({ type: WEBSOCKET_CLOSE });
    };
  }, []);

  console.log(data);

  const getOrderNumbers = (orders: TOrder[]) => {
    const completedOrders: number[] = [];
    const ordersInProgress: number[] = [];
    orders.forEach((o) => {
      o.status === "done"
        ? completedOrders.push(o.number)
        : ordersInProgress.push(o.number);
    });

    return { completedOrders, ordersInProgress };
  };
  console.log(getOrderNumbers);

  return (
    <div className={styles.wrapper}>
      <main className={styles.feedMain}>
        <h1 className={`text text_type_main-large mt-10 mb-5 ${styles.title}`}>
          Лента заказов
        </h1>

        {data.success ? (
          <>
            {/* <div className={styles.content}> */}
            {/* <div className={`${styles.ordersContainer} pr-2 custom-scroll`}> */}
            <section className={`custom-scroll ${styles.feedInfoSectionLeft}`}>
              {data.orders.map((order, index) => (
                <Order key={index} data={order} path={"feed"} />
              ))}
              {/* </div> */}
            </section>

            <div className={styles.orderNumbersContainer}>
              <div className={styles.orderNumbers}>
                <div className={styles.orderNumbersCompleted}>
                  <p className="text text_type_main-medium mb-6">Готовы:</p>
                  <ul className={styles.ordersTable}>
                    {getOrderNumbers(data.orders)
                      .completedOrders.slice(0, 21)
                      .map((n, i) => (
                        <li
                          className={`${styles.orderNumber} text text_type_digits-default text_color_success`}
                          key={i}
                        >
                          {n}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className={styles.orderNumbersInProgress}>
                  <p className="text text_type_main-medium mb-6">В работе:</p>
                  <ul className={styles.ordersTable}>
                    {getOrderNumbers(data.orders).ordersInProgress.length > 0
                      ? getOrderNumbers(data.orders)
                          .ordersInProgress.slice(0, 21)
                          .map((n, i) => (
                            <li
                              className={`${styles.orderNumber} text text_type_digits-default`}
                              key={i}
                            >
                              {n}
                            </li>
                          ))
                      : null}
                  </ul>
                </div>
              </div>

              <div className={styles.ordersTotal}>
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <p
                  className={`${styles.ordersCounter} text text_type_digits-large`}
                >
                  {data.total}
                </p>
              </div>

              <div className={styles.ordersTotalToday}>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <p
                  className={`${styles.ordersCounter} text text_type_digits-large`}
                >
                  {data.totalToday}
                </p>
              </div>
            </div>
            {/* </div> */}
          </>
        ) : (
          <PreloaderComponent />
        )}
      </main>
    </div>
  );
};

export { Feed };
