import { IIngredientDetails } from "../../../data/typesScripts";

export const getIsLoading = (state: {
  popupFeedOrderReducer: { isLoading: boolean };
}) => state.popupFeedOrderReducer.isLoading;
export const getIngredientsError = (state: {
  popupFeedOrderReducer: { error: boolean };
}) => state.popupFeedOrderReducer.error;

export const getFeedOrder = (state: {
  popupFeedOrderReducer: { feedOrderData: IIngredientDetails };
}) => state.popupFeedOrderReducer.feedOrderData;
