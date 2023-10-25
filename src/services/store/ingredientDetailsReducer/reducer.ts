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
export const initialState: TStateIngredientDetailsReducer = {
  ingredient: [
    {
      _id: "",
      type: "",
      image_large: "",
      image_mobail: "",
      image: "",
      name: "",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      price: 0,
    },
  ],
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
