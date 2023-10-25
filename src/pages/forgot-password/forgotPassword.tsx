import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/store/asyncActions/userForgot";
import styles from "./forgot-password.module.css";

const ForgotPassword = () => {
  const [value, setValue] = useState({
    email: "",
  });
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPassword(value);
  };

  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <EmailInput
        placeholder="Укажите e-mail"
        extraClass="mb-6"
        name="email"
        value={value.email}
        onChange={handlerChange}
        required
      />

      <Button htmlType="submit" extraClass={styles.button}>
        Восстановить
      </Button>
      <span className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </span>
    </form>
  );
};

export default ForgotPassword;
