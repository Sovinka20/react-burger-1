import { Order } from "../../components/order/order";
import styles from "./feed.module.css";

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.feedMain}>
        <h1 className={`text text_type_main-large mt-10 mb-5 ${styles.title}`}>
          Лента заказов
        </h1>
        <section className={`custom-scroll ${styles.feedInfoSectionLeft}`}>
          <Order />
          <Order />
          <Order />
        </section>
        <section className={styles.feedInfoSectionRight}>
          <div>
            <div className={styles.ulContainer}>
              <ul className={`text text_type_digits-default ${styles.readu}`}>
                <li className="text text_type_main-medium mb-4">Готовы:</li>
                <li className={styles.readuLI}>034538</li>
                <li className={styles.readuLI}>034539</li>
                <li className={styles.readuLI}>034537</li>
                <li className={styles.readuLI}>034536</li>
                <li className={styles.readuLI}>034535</li>
                <li className={styles.readuLI}>034534</li>
                <li className={styles.readuLI}>034533</li>
                <li className={styles.readuLI}>034532</li>
              </ul>
              <ul className={`text text_type_digits-default ${styles.toWork}`}>
                <li className="text text_type_main-medium mb-4">В работе:</li>
                <li>034540</li>
                <li>034541</li>
                <li>034542</li>
                <li>034543</li>
                <li>034544</li>
              </ul>
            </div>

            <h3 className="text text_type_main-medium">
              Выполнено за все время:
            </h3>
            <span
              className={`text text_type_digits-large mb-15 ${styles.bigDigits}`}
            >
              28 752
            </span>
            <h3 className="text text_type_main-medium">
              Выполнено за сегодня:
            </h3>
            <span className={`text text_type_digits-large ${styles.bigDigits}`}>
              140
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export { Feed };