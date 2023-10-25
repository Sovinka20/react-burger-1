/**
 * Восстановление пароля
 */

import { BASE_URL } from "../../../data/api";
import { TErrorData } from "../../../data/typesScripts";
import { AppThunk } from "../reducers";
import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../userForgot/actions";
import { SUCCESS_RESTORE_PASS } from "../userResetPass/actions";

export type TRestorePassword = {
  email: string;
};

export const forgotPassword: AppThunk =
  (emailData: TRestorePassword) => (dispatch) => {
    dispatch({ type: START_FORGOT_PASS });
    fetch(`${BASE_URL}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response) {
          dispatch({ type: SUCCESS_RESTORE_PASS });
          dispatch({ type: SUCCESS_FORGOT_PASS });
        }
      })
      .catch((err) => {
        err.json().then((data: TErrorData) => {
          dispatch({ type: ERROR_FORGOT_PASS });
        });
      });
  };
