import {
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_SUCCESS,
  TRefreshTokenActions,
} from "./actionsRT";

export type TRefreshTokenReducer = {
  isRequest: boolean;
  isError: boolean;
};

const initialState: TRefreshTokenReducer = {
  isRequest: false,
  isError: false,
};

export const refreshTokenReducer = (
  state = initialState,
  action: TRefreshTokenActions
): TRefreshTokenReducer => {
  switch (action.type) {
    case REFRESH_TOKEN_START:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case REFRESH_TOKEN_ERROR:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case REFRESH_TOKEN_SUCCESS:
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("accessToken", action.payload.accessToken);
      return {
        ...state,
        isRequest: false,
        isError: false,
      };
    default:
      return state;
  }
};
