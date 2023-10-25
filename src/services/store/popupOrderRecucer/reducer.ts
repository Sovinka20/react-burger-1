import {
  CLOSE_ORDER_POPUP,
  IS_OPEN_CLOSE_ORDER_POPUP,
  OPEN_ORDER_POPUP,
  TOGGLE_ORDER_POPUP,
  TPopupReducerActions,
} from "./actions";

export type TOrderReducer = {
  isOpenCloseOrder: boolean;
};

export const initialState: TOrderReducer = {
  isOpenCloseOrder: false,
};

export const popupOrderReducer = (
  state = initialState,
  action: TPopupReducerActions
) => {
  switch (action.type) {
    case OPEN_ORDER_POPUP:
      return { ...state, isOpenCloseOrder: true };
    case CLOSE_ORDER_POPUP:
      return { ...state, isOpenCloseOrder: false };
    case TOGGLE_ORDER_POPUP:
      return { ...state, isOpenCloseOrder: !state.isOpenCloseOrder };
    case IS_OPEN_CLOSE_ORDER_POPUP:
      return { ...state, isOpenCloseOrder: state.isOpenCloseOrder };
    default:
      return state;
  }
};
