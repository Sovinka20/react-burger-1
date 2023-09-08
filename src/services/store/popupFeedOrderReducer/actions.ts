import { IIngredientDetails } from "../../../data/typesScripts";
import { ADD_FEED_ORDER_DATA, CLEAR_FEED_ORDER_DATA } from "./reducer";
export const addFeedOrder = (payload: IIngredientDetails) => ({
  type: ADD_FEED_ORDER_DATA,
  payload,
});
export const clearFeedOrder = () => ({ type: CLEAR_FEED_ORDER_DATA });
