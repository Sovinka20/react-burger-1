import { IIngridients } from "../../../data/typesScripts";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN_INGREDIENT_BUN = "ADD_BUN_INGREDIENT_BUN";
export const DRAG_ON = "DRAG_ON";
export const DRAG_OFF = "DRAG_OFF";
export const CHANGE_INGEDIENT = "CHANGE_INGEDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENT";

export interface IAddIngredints {
  readonly type: typeof ADD_INGREDIENT;
  payload: IIngridients[];
}
export interface IChangeIngredints {
  readonly type: typeof CHANGE_INGEDIENT;
  payload: IIngridients[];
}
export interface IAddIngredientsBun {
  readonly type: typeof ADD_BUN_INGREDIENT_BUN;
  payload: IIngridients;
}
export interface IDeleteIngredint {
  readonly type: typeof DELETE_INGREDIENT;
  payload: IIngridients[];
}
export interface IResetIngredint {
  readonly type: typeof RESET_INGREDIENTS;
}
export interface IDragOn {
  readonly type: typeof DRAG_ON;
}
export interface IDragOff {
  readonly type: typeof DRAG_OFF;
}

export type TBurgerConstructorActions =
  | IAddIngredints
  | IChangeIngredints
  | IAddIngredientsBun
  | IDeleteIngredint
  | IResetIngredint
  | IDragOn
  | IDragOff;

// export const addIngredientConstuctor = (payload: IIngridients) => ({
//   type: ADD_INGREDIENT,
//   payload: { ...payload, key: uuidv4() },
// });
// export const addBunIngredientConstuctor = (payload: IIngridients) => ({
//   type: ADD_BUN_INGREDIENT_BUN,
//   payload,
// });
export const draggingOn = () => ({ type: DRAG_ON });
export const draggingOff = () => ({ type: DRAG_OFF });
export const changeIngredient = (payload: IIngridients[]) => ({
  type: CHANGE_INGEDIENT,
  payload,
});
export const deleteIngredient = (payload: IIngridients[]) => ({
  type: DELETE_INGREDIENT,
  payload,
});
export const resetIngredients = () => ({
  type: RESET_INGREDIENTS,
});
