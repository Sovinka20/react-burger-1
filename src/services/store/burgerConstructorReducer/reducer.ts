import { IIngridients } from "../../../data/typesScripts";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN_INGREDIENT_BUN = "ADD_BUN_INGREDIENT_BUN";
export const DRAG_ON = "DRAG_ON";
export const DRAG_OFF = "DRAG_OFF";
export const CHANGE_INGEDIENT = "CHANGE_INGEDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const RESET_INGREDIENTS = "RESET_INGREDIENT";

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
  console.log(action);
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
