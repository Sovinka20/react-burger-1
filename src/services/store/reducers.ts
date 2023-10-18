import { Dispatch } from "react";
import { Action, ActionCreator, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { TApplicationActions, TStore } from "../../data/typesScripts";
import { AuthReducer } from "./authReducer/reducer";
import { BurgerConstructorReducer } from "./burgerConstructorReducer/reducer";
import { BurgerIngredientsReducer } from "./burgerIngredientsReducer/reducer";
import { IngredientDetailsReducer } from "./ingredientDetailsReducer/reducer";
import { OrderDetailsReducer } from "./orderDetailsReducer/reducer";
import { popupFeedOrderReducer } from "./popupFeedOrderReducer/reducer";
import { popupIngredientsReducer } from "./popupIngredientsReducer/reducer";
import { popupOrderReducer } from "./popupOrderRecucer/reducer";
import { wsOrdersAllReducer } from "./wsOrdersAll/reducerFeed";
import { wsOrdersReducer } from "./wsOrdersAll/reducerProfile";

export const rootReducer = combineReducers({
  popupIngredientsReducer,
  popupOrderReducer,
  BurgerIngredientsReducer,
  BurgerConstructorReducer,
  IngredientDetailsReducer,
  OrderDetailsReducer,
  AuthReducer,
  wsOrdersAllReducer,
  wsOrdersReducer,
  popupFeedOrderReducer,
});

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TStore, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
