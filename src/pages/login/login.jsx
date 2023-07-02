import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authorizationUser } from "../../services/store/asyncActions";
import styles from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(authorizationUser(value));
  };
  return (
    <>
      <form
        action="/"
        method="post"
        className={styles.form}
        onSubmit={handlerSubmit}
      >
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <EmailInput
          placeholder="E-mail"
          extraClass="mb-6"
          name="email"
          value={value.email}
          onChange={handlerChange}
        />
        <PasswordInput
          extraClass="mb-6"
          onChange={handlerChange}
          value={value.password}
          name={"password"}
        />
        <Button htmlType="submit" extraClass={styles.button}>
          Войти
        </Button>
        <span className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?{" "}
          <Link to="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <Link to="/forgot-password" className={styles.link}>
            Восстановить пароль
          </Link>
        </span>
      </form>
    </>
  );
};

export default Login;
