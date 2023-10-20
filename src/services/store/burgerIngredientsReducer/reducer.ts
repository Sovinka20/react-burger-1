import { IIngridients } from "../../../data/typesScripts";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_REQUEST,
  GET_INGRIDIENTS_SUCCESS,
} from "./actions";

type TStateBurgerIngredientsReducer = {
  ingredients: IIngridients[];
  isLoading: boolean;
  error: boolean;
};

const initialState: TStateBurgerIngredientsReducer = {
  ingredients: [],
  isLoading: false,
  error: false,
};

export const BurgerIngredientsReducer = (
  state = initialState,
  action: {
    type: string;
    payload: {
      data: {
        orders: [
          createdAt: string,
          ingredients: Array<string>,
          name: string,
          number: number,
          status: string,
          updatedAt: string,
          _id: string
        ];
        success: boolean;
        total: number;
        totalToday: number;
      };
    };
  }
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
