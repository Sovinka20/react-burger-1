import { IIngridients } from "../../../data/typesScripts";

export const GET_INGREDIENT = "GET_INGREDIENT";
export const SET_INGREDIENT = "SET_INGREDIENT";
export const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";

export interface IGetIngredient {
  readonly type: typeof GET_INGREDIENT;
}
export interface ISetIngredient {
  readonly type: typeof SET_INGREDIENT;
  payload: IIngridients;
}
export interface IClearIngredient {
  readonly type: typeof CLEAR_INGREDIENT;
}

export type TIngredient = IGetIngredient | ISetIngredient | IClearIngredient;

export const getIngredient = () => ({ type: GET_INGREDIENT });
export const setIngredient = (payload: IIngridients) => ({
  type: SET_INGREDIENT,
  payload,
});
export const clearIngredient = () => ({ type: CLEAR_INGREDIENT });
