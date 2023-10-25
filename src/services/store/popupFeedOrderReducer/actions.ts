import { IIngridientsOrder } from "../../../data/typesScripts";

export const GET_REQUEST_ORDER = "GET_REQUEST_ORDER";
export const GET_INGRIDIENTS_ERRORE_ORDER = "GET_INGRIDIENTS_ERRORE_ORDER";
export const ADD_FEED_ORDER_DATA = "ADD_FEED_ORDER_DATA";

export interface IGetRequestOrder {
  readonly type: typeof GET_REQUEST_ORDER;
}
export interface IIngredientsErroreOrder {
  readonly type: typeof GET_INGRIDIENTS_ERRORE_ORDER;
  payload: boolean;
}
export interface IAddFeedOrderData {
  readonly type: typeof ADD_FEED_ORDER_DATA;
  payload: Array<IIngridientsOrder>;
}

export type TRequestOrderActions =
  | IGetRequestOrder
  | IIngredientsErroreOrder
  | IAddFeedOrderData;
