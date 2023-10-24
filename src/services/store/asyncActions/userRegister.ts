import { BASE_URL, checkResponse } from "../../../data/api";
import {
  IS_USER_CHECKED,
  USER_LOGIN_AUTHORIZATION,
} from "../authReducer/actions";
import { AppThunk } from "../reducers";

/**
 * Регистрация
 */
type TUserData = {
  name?: string;
  email?: string;
  password?: string;
};

export const registerUser: AppThunk =
  (registerUserData: TUserData) => (dispatch) => {
    return fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerUserData),
    })
      .then(checkResponse)
      .then((res) => {
        // localStorage.setItem(
        //   "accessToken",
        //   // res.accessToken.replace("Bearer ", "")
        //   res.accessToken
        // );
        // localStorage.setItem("refreshToken", res.refreshToken);

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
