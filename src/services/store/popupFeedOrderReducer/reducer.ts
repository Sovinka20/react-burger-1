import { IOrderDetails } from "../../../data/typesScripts";

//export const CLEAR_FEED_ORDER_DATA = "CLEAR_FEED_ORDER_DATA";

export const GET_REQUEST_ORDER = "GET_REQUEST_ORDER";
export const GET_INGRIDIENTS_ERRORE_ORDER = "GET_INGRIDIENTS_ERRORE_ORDER";
//export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";
export const ADD_FEED_ORDER_DATA = "ADD_FEED_ORDER_DATA";

type TStateIngredientDetailsReducer = {
  // ingredient: IIngridients[];
};

const initialState = {
  feedOrderData: [],
  isLoading: false,
  error: false,
};

const popupFeedOrderReducer = (
  state = initialState,
  action: { type: string; payload: IOrderDetails }
) => {
  switch (action.type) {
    case GET_REQUEST_ORDER:
      return {
        ...state,
        // feedOrderData: [...state.feedOrderData, action.payload],
        isLoading: false,
      };

    case ADD_FEED_ORDER_DATA:
      return {
        ...state,
        isLoading: false,
        feedOrderData: action.payload,
      };
    //  case GET_INGRIDIENTS_SUCCESS:
    //    return { ...state, isLoading: false, ingredients: action.payload };
    case GET_INGRIDIENTS_ERRORE_ORDER:
      return { ...state, isLoading: false, error: action.payload };

    //   case CLEAR_FEED_ORDER_DATA:
    //     return { ...state, feedOrderData: [] };
    default:
      return state;
  }
};
export { popupFeedOrderReducer };
