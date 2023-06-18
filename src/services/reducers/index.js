import { combineReducers } from "redux";
import { BurgerConstructorReducer } from "./burgerConstructorReducer";
import { BurgerIngredientsReducer } from "./burgerIngredientsReducer";
import { IngredientDetails } from "./ingredientDetails";
import { OrderDetails } from "./orderDetailsReducer";
import { popupIngredientsReducer } from "./popupIngredientsReducer";
import { popupOrderReducer } from "./popupOrderReducer";

export const rootReducer = combineReducers({
  popupIngredientsReducer,
  popupOrderReducer,
  BurgerIngredientsReducer,
  IngredientDetails,
  BurgerConstructorReducer,
  OrderDetails,
});
