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
  error: string;
};

const initialState: TStateBurgerIngredientsReducer = {
  ingredients: [],
  isLoading: false,
  error: "",
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
