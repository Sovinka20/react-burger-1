import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/store/asyncActions";
import styles from "./profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeClass = `text text_type_main-medium text_color_inactive ${styles.link} ${styles.activeLink}`;
  const unActiveClass = `text text_type_main-medium text_color_inactive ${styles.link}`;
  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <main className={styles.profileContainer}>
      <div className={styles.leftContentContainer}>
        <nav className={styles.linkContainer}>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            Профиль
          </NavLink>
          <NavLink
            to="/profile/orders"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            История заказов
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
            onClick={logout}
          >
            Выход
          </NavLink>
        </nav>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </main>
  );
};

export default Profile;
