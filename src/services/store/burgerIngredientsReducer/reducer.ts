import { IIngridients } from "../../../data/typesScripts";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_REQUEST,
  GET_INGRIDIENTS_SUCCESS,
  TBurgerIngredientsActions,
} from "./actions";

type TStateBurgerIngredientsReducer = {
  ingredients: IIngridients[];
  isLoading: boolean;
  error: boolean;
};

export const initialState: TStateBurgerIngredientsReducer = {
  ingredients: [
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
  isLoading: false,
  error: false,
};

export const BurgerIngredientsReducer = (
  state = initialState,
  action: TBurgerIngredientsActions
) => {
  switch (action.type) {
    case GET_INGRIDIENTS_REQUEST:
      return { ...state, isLoading: action.payload, error: false };
    case GET_INGRIDIENTS_SUCCESS:
      return { ...state, isLoading: false, ingredients: action.payload };
    case GET_INGRIDIENTS_ERRORE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
