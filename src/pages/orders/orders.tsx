import { useEffect } from "react";
import { Order } from "../../components/order/order";
import PreloaderComponent from "../../components/preloaderComponent/PreloaderComponent";
import { useAppDispatch, useAppSelector } from "../../services/store";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_SUCCESS,
} from "../../services/store/wsOrdersAll/actionsProfile";
import styles from "./orders.module.css";

const Orders = () => {
  // const dispatch = useDispatch();
  // const tokenLocalStorage: string = localStorage.getItem("accessToken") || "";
  // const token: string =
  //   tokenLocalStorage !== ""
  //     ? tokenLocalStorage.substring(tokenLocalStorage.length - 171)
  //     : tokenLocalStorage;
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.wsOrdersAllReducer);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_SUCCESS });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  // const getIngredients = useSelector(getWsAllIngridients);

  return (
    <div className={`custom-scroll ${styles.wrapper}`}>
      <main className={styles.feedMain}>
        {data.success ? (
          <section className={`custom-scroll ${styles.feedInfoSectionLeft}`}>
            {data.orders.map((order, index) => (
              <Order key={index} data={order} path={"profile/orders"} />
            ))}
            {/* </div> */}
          </section>
        ) : (
          <PreloaderComponent />
        )}
      </main>
    </div>
  );
};

export { Orders };
