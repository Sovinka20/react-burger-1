import { combineReducers } from "redux";
import { BurgerConstructorReducer } from "../store/burgerConstructorReducer/reducer";
import { BurgerIngredientsReducer } from "../store/burgerIngredientsReducer/reducer";
import { IngredientDetailsReducer } from "../store/ingredientDetailsReducer/reducer";
import { OrderDetailsReducer } from "../store/orderDetailsReducer/reducer";
import { popupIngredientsReducer } from "../store/popupIngredientsReducer/reducer";
import { popupOrderReducer } from "../store/popupOrderRecucer/reducer";
import { AuthReducer } from "./authReducer/reducer";
import { popupFeedOrderReducer } from "./popupFeedOrderReducer/reducer";
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
