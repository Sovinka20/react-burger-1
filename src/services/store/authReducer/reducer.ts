import {
  CHANGE_RESET_PASSWORD,
  CHANGE_USER_DATA,
  IS_USER_CHECKED,
  LOGOUT_USER,
  USER_LOGIN_AUTHORIZATION,
} from "./actions";

export type TStateAuthReducer = {
  success: boolean;
  user: boolean;
  isAuthChecked: boolean;
  resetPassword: boolean;
};

const initialState: TStateAuthReducer = {
  success: false,
  user: false,
  isAuthChecked: false,
  resetPassword: false,
};

export const AuthReducer = (
  state = initialState,
  action: { type: string; payload: boolean | any }
) => {
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
    case LOGOUT_USER:
      return { ...state, user: null, oldUserData: false, success: false };
    case IS_USER_CHECKED:
      return { ...state, isAuthChecked: action.payload };
    case CHANGE_RESET_PASSWORD:
      return { ...state, resetPassword: action.payload };
    default:
      return state;
  }
};
