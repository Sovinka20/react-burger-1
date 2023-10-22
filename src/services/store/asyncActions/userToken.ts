import { BASE_URL, checkResponse } from "../../../data/api";
import { TRefreshToken } from "../../../data/typesScripts";
import { AppThunk } from "../reducers";
import { REFRESH_TOKEN_SUCCESS } from "../userRefreshToken/actionsRT";

/**
 * Обновить accessToken
 */
export const requestRefreshToken: AppThunk = (dispatch) => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((res: TRefreshToken) => {
      dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res });
      return res;
    }).catch;
};
