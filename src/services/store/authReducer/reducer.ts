import {
  CHANGE_RESET_PASSWORD,
  CHANGE_USER_DATA,
  IS_USER_CHECKED,
  LOGOUT_USER,
  TUserActions,
  USER_LOGIN_AUTHORIZATION,
} from "./actions";

export type TStateAuthReducer = {
  success: boolean;
  user: { email: string; name: string; password: string } | null;
  oldUserData: { email: string; name: string; password: string } | null;
  isAuthChecked: boolean;
  resetPassword: boolean;
};

export const initialState: TStateAuthReducer = {
  success: false,
  user: null,
  oldUserData: null,
  isAuthChecked: false,
  resetPassword: false,
};

export const AuthReducer = (state = initialState, action: TUserActions) => {
  switch (action.type) {
    case USER_LOGIN_AUTHORIZATION:
      return {
        ...state,
        user: { ...action.payload },
        oldUserData: { ...action.payload },
        success: true,
      };
    case CHANGE_USER_DATA:
      return { ...state, user: { ...action.payload } };
    case IS_USER_CHECKED:
      return { ...state, isAuthChecked: action.payload };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        oldUserData: null,
        isAuthChecked: false,
        resetPassword: false,
      };

    case CHANGE_RESET_PASSWORD:
      return { ...state, resetPassword: action.payload };
    default:
      return state;
  }
};
