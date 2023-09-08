import { IIngredientDetails } from "../../../data/typesScripts";
import { GET_INGRIDIENTS_SUCCESS } from "./reducer";

export const getIngredients = (payload: IIngredientDetails[]) => ({
  type: GET_INGRIDIENTS_SUCCESS,
  payload,
});
