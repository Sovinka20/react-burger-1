import { BASE_URL } from "../../../data/api";
import { TErrorData } from "../../../data/typesScripts";
import { AppThunk } from "../reducers";
import {
  ERROR_RESTORE_PASS,
  RESET_REQUEST_ACCEPT,
  START_RESTORE_PASS,
  SUCCESS_RESTORE_PASS,
} from "../userResetPass/actions";

/**
 * Сброс пароля
 */

export type TResetPassData = {
  token: string;
  password: string;
};

export const resetPassword: AppThunk =
  (resetPaswordData: TResetPassData) => (dispatch) => {
    dispatch({ type: START_RESTORE_PASS });
    return fetch(`${BASE_URL}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resetPaswordData),
    })
      .then((response) => {
        if (response) {
          dispatch({ type: SUCCESS_RESTORE_PASS, payload: response });
          dispatch({ type: RESET_REQUEST_ACCEPT });
        }
      })
      .catch((err) => {
        err.json().then((data: TErrorData) => {
          dispatch({ type: ERROR_RESTORE_PASS });
        });
      });
  };
