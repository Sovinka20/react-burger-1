import { TCurrentOrderResponse } from "../../../data/typesScripts";

export const GET_ORDER_DATA = "GET_ORDER_DATA";
export const SET_ORDER_DATA = "SET_ORDER_DATA";
export const RESET_ORDER_DATA = "RESET_ORDER_DATA";

export interface IGetOrderData {
  readonly type: typeof GET_ORDER_DATA;
  payload: TCurrentOrderResponse;
}
export interface ISetOrderData {
  readonly type: typeof SET_ORDER_DATA;
  payload: TCurrentOrderResponse;
}
export interface IResetOrderData {
  readonly type: typeof RESET_ORDER_DATA;
}

export type TOrderDataActions = IGetOrderData | ISetOrderData | IResetOrderData;
