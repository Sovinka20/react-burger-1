import { IIngridients } from "../../../data/typesScripts";
import {
  ADD_BUN_INGREDIENT_BUN,
  ADD_INGREDIENT,
  CHANGE_INGEDIENT,
  DELETE_INGREDIENT,
  DRAG_OFF,
  DRAG_ON,
  RESET_INGREDIENTS,
  TBurgerConstructorActions,
} from "./actions";

export type TBurgerConstructorReducer = {
  bun: null | IIngridients;
  ingredients: IIngridients[];
  isDrag: boolean;
};

const initialState: TBurgerConstructorReducer = {
  bun: null,
  ingredients: [],
  isDrag: false,
};

export const BurgerConstructorReducer = (
  state = initialState,
  action: TBurgerConstructorActions
) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };

    case CHANGE_INGEDIENT:
      return { ...state, ingredients: [...action.payload] };

    case ADD_BUN_INGREDIENT_BUN:
      return { ...state, bun: action.payload };

    case DELETE_INGREDIENT:
      return { ...state, ingredients: [...action.payload] };
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
