import { v4 as uuidv4 } from "uuid";
import { IIngridients } from "../../../data/typesScripts";
import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
  CHANGE_INGEDIENT,
  DELETE_INGREDIENT,
  DRAG_OFF,
  DRAG_ON,
  RESET_INGREDIENTS,
} from "./reducer";
export const addIngredientConstuctor = (peyload: IIngridients) => ({
  type: ADD_INGREDIENT,
  peyload: { ...peyload, key: uuidv4() },
});
export const addBunIngredientConstuctor = (peyload: IIngridients) => ({
  type: ADD_BUN_INGREDIENT_BUN,
  peyload,
});
export const draggingOn = () => ({ type: DRAG_ON });
export const draggingOff = () => ({ type: DRAG_OFF });
export const changeIngredient = (peyload: IIngridients[]) => ({
  type: CHANGE_INGEDIENT,
  peyload,
});
export const deleteIngredient = (peyload: IIngridients[]) => ({
  type: DELETE_INGREDIENT,
  peyload,
});
export const resetIngredients = (payload: string) => ({
  type: RESET_INGREDIENTS,
  payload,
});
