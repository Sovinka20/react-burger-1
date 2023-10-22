import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../services/store";
import { resetPassword } from "../../services/store/asyncActions/userReset";
import styles from "./reset-password.module.css";

const ResetPassword = () => {
  const [value, setValue] = useState({
    password: "",
    token: "",
  });
  const dispatch = useAppDispatch();
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(value);
    // .then((result) => {
    //   dispatch(changeResetPassword(false));
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        placeholder="Введите новый пароль"
        icon={"ShowIcon"}
        extraClass="mb-6"
        value={value.password}
        type="text"
        name="password"
        onChange={handlerChange}
      />

      <Input
        placeholder="Введите код из письма"
        extraClass="mb-6"
        value={value.token}
        type="text"
        name="token"
        onChange={handlerChange}
      />

      <Button htmlType="submit" extraClass={styles.button}>
        Сохранить
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

export default ResetPassword;
