import { IIngridients } from "../../../data/typesScripts";
import {
  CLEAR_INGREDIENT,
  GET_INGREDIENT,
  SET_INGREDIENT,
  TIngredient,
} from "./actions";

type TStateIngredientDetailsReducer = {
  ingredient: IIngridients[];
};
const initialState: TStateIngredientDetailsReducer = {
  ingredient: [],
};

export const IngredientDetailsReducer = (
  state = initialState,
  action: TIngredient
) => {
  switch (action.type) {
    case GET_INGREDIENT:
      return { ...state, ingredient: { ...state.ingredient } };
    case SET_INGREDIENT:
      return { ...state, ingredient: action.payload };
    case CLEAR_INGREDIENT:
      return { ...state, ingredient: [] };
    default:
      return state;
  }
};
