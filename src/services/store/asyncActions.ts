import { BASE_URL, checkResponse } from "../../data/api";
import { IIngridients } from "../../data/typesScripts";
import {
  isUserChecked,
  LOGOUT_USER,
  USER_LOGIN_AUTHORIZATION,
} from "./authReducer/actions";
import { resetIngredients } from "./burgerConstructorReducer/actions";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_REQUEST,
  GET_INGRIDIENTS_SUCCESS,
} from "./burgerIngredientsReducer/actions";

import { setOrderData } from "./orderDetailsReducer/actions";

export const fetchOrderPost =
  (ingredientsList: Array<string>) =>
  (
    dispatch: (arg0: {
      type: string;
      payload: { email: string; user: string } | string;
    }) => void
  ) => {
    const token: string = localStorage.getItem("accessToken") || "";
    fetch(`${BASE_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      },
      body: JSON.stringify({ ingredients: ingredientsList }),
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(setOrderData(res));
        dispatch(resetIngredients(""));
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const fetchIngredients =
  () =>
  (
    dispatch: (arg0: {
      type: string;
      payload: { data: IIngridients } | string | boolean;
    }) => void
  ) => {
    dispatch({
      type: GET_INGRIDIENTS_REQUEST,
      payload: true,
    });
    fetch(`${BASE_URL}/ingredients`)
      .then(checkResponse)
      .then((json) => {
        dispatch({
          type: GET_INGRIDIENTS_SUCCESS,
          payload: json.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_INGRIDIENTS_ERRORE,
          payload: `Произошла ошибка при получении данных: ${err.status}`,
        });
      });
  };

/**
 * 
  Авторизация
 */
export const authorizationUser =
  (loginUserData: { email: string; password: string }) =>
  (dispatch: (arg0: { type: string; payload: string | boolean }) => void) => {
    return fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUserData),
    })
      .then(checkResponse)
      .then((res) => {
        localStorage.setItem(
          "accessToken",
          // res.accessToken.replace("Bearer ", "")
          res.accessToken
        );
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({
          type: USER_LOGIN_AUTHORIZATION,
          payload: res.user,
        });
        dispatch(isUserChecked(true));
      })
      .catch((err) => {
        dispatch(isUserChecked(false));
        console.log(err);
      });
  };
/**
 * Регистрация
 */
export const registerUser =
  (registerUserData: { email: string; password: string; name: string }) =>
  (dispatch: (arg0: { type: string; payload: string | boolean }) => void) => {
    return fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerUserData),
    })
      .then(checkResponse)
      .then((res) => {
        localStorage.setItem(
          "accessToken",
          // res.accessToken.replace("Bearer ", "")
          res.accessToken
        );
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({
          type: USER_LOGIN_AUTHORIZATION,
          payload: res.user,
        });
        dispatch(isUserChecked(true));
      })
      .catch((err) => {
        dispatch(isUserChecked(false));
        console.log(err);
      });
  };

/**
 * Выход
 */
export const logoutUser =
  () => (dispatch: (arg0: { type: string }) => void) => {
    return fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    })
      .then(checkResponse)
      .then((res) => {
        localStorage.clear();
        dispatch({
          type: LOGOUT_USER,
        });
      })
      .catch((err) => console.log(err));
  };
