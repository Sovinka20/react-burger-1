export const USER_LOGIN_AUTHORIZATION = "USER_LOGIN_AUTHORIZATION";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA";
export const IS_USER_CHECKED = "IS_USER_CHECKED";
export const IS_USER_AUTHENTIFICATED = "IS_USER_AUTHENTIFICATED";
export const CHANGE_RESET_PASSWORD = "CHANGE_RESET_PASSWORD";

export interface IUserLogin {
  readonly type: typeof USER_LOGIN_AUTHORIZATION;
  payload: { email: string; name: string };
}
export interface ILogoutUser {
  readonly type: typeof LOGOUT_USER;
}
export interface IChanheUserData {
  readonly type: typeof CHANGE_USER_DATA;
  payload: { email: string; name: string };
}
export interface IIsUserChecked {
  readonly type: typeof IS_USER_CHECKED;
  payload: boolean;
}
export interface IIsUserAuth {
  readonly type: typeof IS_USER_AUTHENTIFICATED;
  payload: boolean;
}
export interface IChangeResetPass {
  readonly type: typeof CHANGE_RESET_PASSWORD;
  payload: boolean;
}

export type TUserActions =
  | IUserLogin
  | ILogoutUser
  | IChanheUserData
  | IIsUserChecked
  | IIsUserAuth
  | IChangeResetPass;

export const changeResetPassword = (payload: boolean) => ({
  type: CHANGE_RESET_PASSWORD,
  payload,
});
