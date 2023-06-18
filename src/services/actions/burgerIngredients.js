import { GET_INGRIDIENTS_REQUEST } from "../reducers/burgerIngredientsReducer";

export const getIngredients = (payload) => ({
  type: GET_INGRIDIENTS_REQUEST,
  payload,
});
