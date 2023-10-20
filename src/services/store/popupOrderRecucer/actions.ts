export const OPEN_ORDER_POPUP = "OPEN_ORDER_POPUP";
export const CLOSE_ORDER_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_ORDER_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_ORDER_POPUP = "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

export interface IOpenOrderPopup {
  readonly type: typeof OPEN_ORDER_POPUP;
  payload: { type: string };
}
export interface ICloseOrderPopup {
  readonly type: typeof CLOSE_ORDER_POPUP;
  payload: { type: string };
}
export interface IToggleOrderPopup {
  readonly type: typeof TOGGLE_ORDER_POPUP;
  payload: { type: string };
}
export interface IIsOpenCloseOrderPopup {
  readonly type: typeof IS_OPEN_CLOSE_ORDER_POPUP;
  payload: { type: string };
}

export type TPopupReducerActions =
  | IOpenOrderPopup
  | ICloseOrderPopup
  | IToggleOrderPopup
  | IIsOpenCloseOrderPopup;

export const openOrderPopup = () => ({ type: OPEN_ORDER_POPUP });
export const closeOrderPopup = () => ({ type: CLOSE_ORDER_POPUP });
export const toggleOrderPopup = () => ({ type: TOGGLE_ORDER_POPUP });
export const isOpenCloseOrderPopup = () => ({ type: TOGGLE_ORDER_POPUP });
