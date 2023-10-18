import { IIngridientsOrder } from "../../../data/typesScripts";

export const getIngridients = (state: {
  BurgerIngredientsReducer: { ingredients: IIngridientsOrder[] };
}) => state.BurgerIngredientsReducer.ingredients;
export const getIsLoading = (state: {
  BurgerIngredientsReducer: { isLoading: boolean };
}) => state.BurgerIngredientsReducer.isLoading;
export const getIngredientsError = (state: {
  BurgerIngredientsReducer: { error: boolean };
}) => state.BurgerIngredientsReducer.error;
