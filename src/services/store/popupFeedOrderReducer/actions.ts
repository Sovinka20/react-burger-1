import { IIngredientDetails } from "../../../data/typesScripts";
import { ADD_FEED_ORDER_DATA, GET_REQUEST_ORDER } from "./reducer";
export const addFeedOrder = (payload: IIngredientDetails) => ({
  type: ADD_FEED_ORDER_DATA,
  payload,
});
export const getFeedOrder = (payload: IIngredientDetails) => ({
  type: GET_REQUEST_ORDER,
  payload,
});
//export const clearFeedOrder = () => ({ type: CLEAR_FEED_ORDER_DATA });
