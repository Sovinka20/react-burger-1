import { IIngridientsOrder } from "../../../data/typesScripts";
import {
  ADD_FEED_ORDER_DATA,
  GET_INGRIDIENTS_ERRORE_ORDER,
  GET_REQUEST_ORDER,
  TRequestOrderActions,
} from "./actions";

export type TFeedOrderReducer = {
  feedOrderData: Array<IIngridientsOrder>;
  isLoading: boolean;
  error: boolean;
};

export const initialState: TFeedOrderReducer = {
  feedOrderData: [
    {
      _id: "",
      type: "",
      image_large: "",
      image_mobile: "",
      image_mobail: "",
      image: "",
      name: "",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      price: 0,
      numberOfComponents: 0,
    },
  ],
  isLoading: false,
  error: false,
};

const popupFeedOrderReducer = (
  state = initialState,
  action: TRequestOrderActions
) => {
  switch (action.type) {
    case GET_REQUEST_ORDER:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_FEED_ORDER_DATA:
      return {
        ...state,
        isLoading: false,
        feedOrderData: action.payload,
      };
    case GET_INGRIDIENTS_ERRORE_ORDER:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export { popupFeedOrderReducer };
