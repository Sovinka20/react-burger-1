import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/store/asyncActions";
import styles from "./register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(value) as unknown as any);
  };
  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        placeholder="Имя"
        extraClass="mb-6"
        value={value.name}
        type="text"
        name="name"
        onChange={handlerChange}
      />
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
        Зарегистрироваться
      </Button>

      <span className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </span>
    </form>
  );
};

export default Register;
