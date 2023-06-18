import {
  CLEAR_INGREDIENT,
  GET_INGREDIENT,
  SET_INGREDIENT,
} from "../reducers/ingredientDetails";

export const getIngredient = () => ({ type: GET_INGREDIENT });
export const setIngredient = (peyload) => ({ type: SET_INGREDIENT, peyload });
export const clearIngredient = () => ({ type: CLEAR_INGREDIENT });
