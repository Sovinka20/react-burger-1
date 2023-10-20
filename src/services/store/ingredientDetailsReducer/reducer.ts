import { IIngridients } from "../../../data/typesScripts";
import { CLEAR_INGREDIENT, GET_INGREDIENT, SET_INGREDIENT } from "./actions";

type TStateIngredientDetailsReducer = {
  ingredient: IIngridients[];
};
const initialState: TStateIngredientDetailsReducer = {
  ingredient: [],
};

export const IngredientDetailsReducer = (
  state = initialState,
  action: { type: string; peyload: IIngridients }
) => {
  switch (action.type) {
    case GET_INGREDIENT:
      return { ...state, ingredient: { ...state.ingredient } };
    case SET_INGREDIENT:
      return { ...state, ingredient: action.peyload };
    case CLEAR_INGREDIENT:
      return { ...state, ingredient: [] };
    default:
      return state;
  }
};
