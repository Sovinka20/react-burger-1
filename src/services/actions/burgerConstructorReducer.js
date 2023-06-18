import { v4 as uuidv4 } from "uuid";
import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
  CHANGE_INGEDIENT,
  DELETE_INGREDIENT,
  DRAG_OFF,
  DRAG_ON,
} from "../reducers/burgerConstructorReducer";
export const addIngredientConstuctor = (peyload) => ({
  type: ADD_INGREDIENT,
  peyload: { ...peyload, key: uuidv4() },
});
export const addBunIngredientConstuctor = (peyload) => ({
  type: ADD_BUN_INGREDIENT_BUN,
  peyload,
});
export const draggingOn = () => ({ type: DRAG_ON });
export const draggingOff = () => ({ type: DRAG_OFF });
export const changeIngredient = (peyload) => ({
  type: CHANGE_INGEDIENT,
  peyload,
});
export const deleteIngredient = (peyload) => ({
  type: DELETE_INGREDIENT,
  peyload,
});
