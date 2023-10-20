import {
  CLOSE_ORDER_POPUP,
  IS_OPEN_CLOSE_ORDER_POPUP,
  OPEN_ORDER_POPUP,
  TOGGLE_ORDER_POPUP,
} from "./actions";

const initialState = {
  isOpenCloseOrder: false,
};

export const popupOrderReducer = (
  state = initialState,
  action: { type: string }
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
