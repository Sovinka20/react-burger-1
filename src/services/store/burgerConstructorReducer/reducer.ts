import { IIngridients } from "../../../data/typesScripts";
import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
  CHANGE_INGEDIENT,
  DELETE_INGREDIENT,
  DRAG_OFF,
  DRAG_ON,
  RESET_INGREDIENTS,
} from "./actions";

export type TStateAuthReducer = {
  success: boolean;
  user: boolean;
  isAuthChecked: boolean;
  resetPassword: boolean;
};

const initialState = {
  bun: null,
  ingredients: [],
  isDrag: false,
};

export const BurgerConstructorReducer = (
  state = initialState,
  action: { type: string; peyload: IIngridients[] }
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.peyload] };

    case CHANGE_INGEDIENT:
      return { ...state, ingredients: [...action.peyload] };

    case ADD_BUN_INGREDIENT_BUN:
      return { ...state, bun: action.peyload };

    case DELETE_INGREDIENT:
      return { ...state, ingredients: [...action.peyload] };
    case RESET_INGREDIENTS:
      return { ...state, ingredients: [], bun: null };
    case DRAG_ON:
      return { ...state, isDrag: true };

    case DRAG_OFF:
      return { ...state, isDrag: false };

    default:
      return state;
  }
};
