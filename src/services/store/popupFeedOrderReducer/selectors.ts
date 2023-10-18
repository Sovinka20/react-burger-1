import { IIngredientDetails } from "../../../data/typesScripts";

//export const getFeedOrderData = (state: {
//  popupFeedOrderReducer: IOrderDetails;
//}) => state.popupFeedOrderReducer.feedOrderData;

export const getIsLoading = (state: {
  popupFeedOrderReducer: { isLoading: boolean };
}) => state.popupFeedOrderReducer.isLoading;
export const getIngredientsError = (state: {
  popupFeedOrderReducer: { error: boolean };
}) => state.popupFeedOrderReducer.error;

export const getFeedOrder = (state: {
  popupFeedOrderReducer: { feedOrderData: IIngredientDetails };
}) => state.popupFeedOrderReducer.feedOrderData;
