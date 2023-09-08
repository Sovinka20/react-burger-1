export const ADD_FEED_ORDER_DATA = "ADD_FEED_ORDER_DATA";
export const CLEAR_FEED_ORDER_DATA = "CLEAR_FEED_ORDER_DATA";

type TStateIngredientDetailsReducer = {
  // ingredient: IIngridients[];
};

const initialState = {
  feedOrderData: [],
};

const popupFeedOrderReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_FEED_ORDER_DATA:
      return {
        ...state,
        feedOrderData: [...state.feedOrderData, action.payload],
      };
    case CLEAR_FEED_ORDER_DATA:
      return { ...state, feedOrderData: [] };
    default:
      return state;
  }
};
export { popupFeedOrderReducer };
