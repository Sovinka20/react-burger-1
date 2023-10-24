import { BASE_URL, checkResponse } from "../../../data/api";
import { setCookie } from "../../../data/cookie";
import {
  IS_USER_CHECKED,
  USER_LOGIN_AUTHORIZATION,
} from "../authReducer/actions";
import { AppThunk } from "../reducers";

/**
 * 
  Авторизация
 */
type TUserAuthData = {
  email: string;
  password: string;
};

export const authorizationUser: AppThunk =
  (loginUserData: TUserAuthData) => (dispatch) => {
    return fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUserData),
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        // window.localStorage.setItem("accessToken", res.accessToken);
        // window.localStorage.setItem("refreshToken", res.refreshToken);
        setCookie("refreshToken", res.refreshToken, {
          expires: 99999 * 999,
        });
        setCookie("accessToken", res.accessToken, {
          expires: 1200,
        });

        dispatch({
          type: USER_LOGIN_AUTHORIZATION,
          payload: res.user,
        });
        dispatch({ type: IS_USER_CHECKED, payload: true });
      })
      .catch((err) => {
        dispatch({ type: IS_USER_CHECKED, payload: false });
        console.log(err);
      });
  };
