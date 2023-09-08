import { IIngridients } from "../../../data/typesScripts";
import { CLEAR_INGREDIENT, GET_INGREDIENT, SET_INGREDIENT } from "./reducer";

export const getIngredient = () => ({ type: GET_INGREDIENT });
export const setIngredient = (peyload: IIngridients) => ({
  type: SET_INGREDIENT,
  peyload,
});
export const clearIngredient = () => ({ type: CLEAR_INGREDIENT });
