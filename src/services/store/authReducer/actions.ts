import { CHANGE_RESET_PASSWORD, IS_USER_CHECKED } from "./reducer";

export const isUserChecked = (payload: boolean) => ({
  type: IS_USER_CHECKED,
  payload,
});
export const changeResetPassword = (payload: boolean) => ({
  type: CHANGE_RESET_PASSWORD,
  payload,
});
