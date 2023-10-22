import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, useState } from "react";
import { BASE_URL, PATCH_HEADERS } from "../../data/api";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { fetchWithRefresh } from "../../services/store/asyncActions/userInfo";
import { CHANGE_USER_DATA } from "../../services/store/authReducer/actions";
import { userData } from "../../services/store/authReducer/selectors";
import styles from "./profile-form.module.css";

export const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const userDataAuth = useAppSelector(userData);
  const [value, setValue] = useState({
    name: userDataAuth.name,
    email: userDataAuth.email,
    password: "",
  });
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  /**
   * Изменяет данные пользователя.
   */
  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchWithRefresh(`${BASE_URL}/auth/user`, {
      ...PATCH_HEADERS,
      body: JSON.stringify(value),
    })
      .then((res) => {
        // console.log(res);
        dispatch({
          type: CHANGE_USER_DATA,
          payload: res.user,
        });
      })
      .catch((res) => console.log(res));
  };
  /**
   * Изменяет данные пользователя, в полях ввода.
   */
  const handlerOldData = () => {
    setValue({
      name: userDataAuth.name,
      email: userDataAuth.email,
      password: "",
    });
  };
  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <Input
        placeholder={"Имя"}
        icon={"EditIcon"}
        extraClass="mb-6"
        value={value.name}
        type="text"
        name="name"
        onChange={handlerChange}
      />

      <EmailInput
        placeholder={"Логин"}
        //icon={"EditIcon"}
        extraClass="mb-6"
        name="email"
        value={value.email}
        onChange={handlerChange}
      />

      <PasswordInput
        placeholder="Пароль"
        icon={"EditIcon"}
        extraClass="mb-6"
        value={value.password}
        // type="password"
        name="password"
        onChange={handlerChange}
      />

      <div className={styles.linkFormContainer}>
        <Button
          htmlType="button"
          className={`text text_type_main-default text_color_inactive ${styles.button2} mr-5`}
          onClick={handlerOldData}
        >
          Отмена
        </Button>
        <Button htmlType="submit" extraClass={styles.button}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
