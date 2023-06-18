import { combineReducers } from "redux";
import { burgerConstructor } from "./burgerConstructorReducer";
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
  burgerConstructor: burgerConstructor,
  OrderDetails,
});
