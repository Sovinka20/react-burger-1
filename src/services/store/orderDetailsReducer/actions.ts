export const GET_ORDER_DATA = "GET_ORDER_DATA";
export const SET_ORDER_DATA = "SET_ORDER_DATA";
export const RESET_ORDER_DATA = "RESET_ORDER_DATA";

export interface IGetOrderData {
  readonly type: typeof GET_ORDER_DATA;
  payload: {
    type: string;
    payload: { order: { number: number }; name: string };
  };
}
export interface ISetOrderData {
  readonly type: typeof SET_ORDER_DATA;
  payload: {
    type: string;
    payload: { order: { number: number }; name: string };
  };
}
export interface IResetOrderData {
  readonly type: typeof RESET_ORDER_DATA;
}

export type TOrderDataActions = IGetOrderData | ISetOrderData | IResetOrderData;

export const setOrderData = (payload: { email: string; user: string }) => ({
  type: SET_ORDER_DATA,
  payload,
});

export const resetOrderData = () => ({
  type: RESET_ORDER_DATA,
});
