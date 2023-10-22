import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppThunk, rootReducer } from "./store/reducers";

import { configureStore } from "@reduxjs/toolkit";
import { WS_URL_ORDERS_ALL, WS_URL_ORDERS_USER_HISTORY } from "../data/api";
import { TStore } from "../data/typesScripts";
import { webSocketMiddleware, WSActions } from "./middleware/socketMiddleware";
import { WSActionsOrdersAll } from "./store/wsOrdersAll/actionsFeed";
import { WSActionsOrdersUserHistory } from "./store/wsOrdersAll/actionsProfile";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      webSocketMiddleware(
        WS_URL_ORDERS_ALL,
        WSActionsOrdersAll as WSActions,
        false
      ),
      webSocketMiddleware(
        WS_URL_ORDERS_USER_HISTORY,
        WSActionsOrdersUserHistory as WSActions,
        true
      )
    ),
});

export const useAppDispatch = () => useDispatch<AppDispatch & AppThunk>();
export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
