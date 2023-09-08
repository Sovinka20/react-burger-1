import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer/reducer";
import { BurgerConstructorReducer } from "./burgerConstructorReducer/reducer";
import { BurgerIngredientsReducer } from "./burgerIngredientsReducer/reducer";
import { IngredientDetailsReducer } from "./ingredientDetailsReducer/reducer";
import { OrderDetailsReducer } from "./orderDetailsReducer/reducer";
import { popupFeedOrderReducer } from "./popupFeedOrderReducer/reducer";
import { popupIngredientsReducer } from "./popupIngredientsReducer/reducer";
import { popupOrderReducer } from "./popupOrderRecucer/reducer";
import { wsOrdersAllReducer } from "./wsOrdersAll/reducer2";

export const rootReducer = combineReducers({
  popupIngredientsReducer,
  popupOrderReducer,
  BurgerIngredientsReducer,
  BurgerConstructorReducer,
  IngredientDetailsReducer,
  OrderDetailsReducer,
  AuthReducer,
  wsOrdersAllReducer,
  popupFeedOrderReducer,
});
