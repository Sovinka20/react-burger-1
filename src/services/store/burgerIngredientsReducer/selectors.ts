export const getIngridients = (state: {
  BurgerIngredientsReducer: { ingredients: any };
}) => state.BurgerIngredientsReducer.ingredients;
export const getIsLoading = (state: {
  BurgerIngredientsReducer: { isLoading: any };
}) => state.BurgerIngredientsReducer.isLoading;
export const getIngredientsError = (state: {
  BurgerIngredientsReducer: { error: any };
}) => state.BurgerIngredientsReducer.error;
