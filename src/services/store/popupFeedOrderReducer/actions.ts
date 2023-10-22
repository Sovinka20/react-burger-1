import {
  IIngredientDetails,
  IIngridientsOrder,
} from "../../../data/typesScripts";

//export const CLEAR_FEED_ORDER_DATA = "CLEAR_FEED_ORDER_DATA";

export const GET_REQUEST_ORDER = "GET_REQUEST_ORDER";
export const GET_INGRIDIENTS_ERRORE_ORDER = "GET_INGRIDIENTS_ERRORE_ORDER";
//export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";
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

export const addFeedOrder = (payload: IIngredientDetails) => ({
  type: ADD_FEED_ORDER_DATA,
  payload,
});
export const getFeedOrder = (payload: IIngredientDetails) => ({
  type: GET_REQUEST_ORDER,
  payload,
});
//export const clearFeedOrder = () => ({ type: CLEAR_FEED_ORDER_DATA });
