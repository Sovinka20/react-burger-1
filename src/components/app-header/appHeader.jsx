import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className={styles.menu}>
          <li className={`${styles.menuItem}`}>
            <a href="/" className={styles.menuLink}>
              <BurgerIcon type="primery" />
              <span
                //style={{ color: "white" }}
                className={`text text_type_main-default pl-2 ${styles.span}`}
              >
                Конструктор
              </span>
            </a>
          </li>
          <li className={`${styles.menuItem}`}>
            <a href="/" className={styles.menuLink}>
              <ListIcon type="secondary" />
              <span
                className={`text text_type_main-default text_color_inactive pl-2`}
              >
                Лента заказов
              </span>
            </a>
          </li>
          <li className={`${styles.menuItem}`}>
            <a href="/" className={styles.menuLink}>
              <Logo />
            </a>
          </li>
          <li className={`${styles.menuItem}`}>
            <a href="/" className={styles.menuLink}>
              <ProfileIcon type="secondary" />
              <span
                className={`text text_type_main-default text_color_inactive pl-2`}
              >
                Личный кабинет
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
