import { BASE_URL, checkResponse } from "../../../data/api";
import { LOGOUT_USER } from "../authReducer/actions";
import { AppThunk } from "../reducers";

/**
 * Выход
 */
export const logoutUser: AppThunk = () => (dispatch) => {
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
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
