import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppThunk, rootReducer } from "./store/reducers";

import { configureStore } from "@reduxjs/toolkit";
import { WS_URL_ORDERS_ALL, WS_URL_ORDERS_USER_HISTORY } from "../data/api";
import { TStore } from "../data/typesScripts";
import { webSocketMiddleware, WSActions } from "./middleware/socketMiddleware";
import { WSActionsOrdersAll } from "./store/wsOrdersAll/actionsFeed";
import { WSActionsOrdersUserHistory } from "./store/wsOrdersAll/actionsProfile";
// import {
//   websocketConnect,
//   WS_FEED_ACTIONS,
// } from "./store/wsOrdersAll/actionsFeed";
// import {
//   websocketConnectProfile,
//   WS_PROFILE_ACTIONS,
// } from "./store/wsOrdersAll/actionsProfile";
// import { wsConnectFeed as socketFeedConnect } from "./store/wsOrdersAll/actionsFeed";

// const WS_FEED_ACTIONS = {
//   wsConnect: socketFeedConnect,
//   onOpen: wsOpenFeed,
//   onClose: wsCloseFeed,
//   onError: wsMessageFeed,
//   onMessage: wsErrorProfileFeed,
// };

// const WS_PROFILE_ACTIONS = {
//   wsConnect: wsConnectProfile,
//   onOpen: wsOpenProfile,
//   onClose: wsCloseProfile,
//   onError: wsMessageProfile,
//   onMessage: wsErrorProfile,
//   onGet: wsGetProfile,
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat([feedMiddleware, profileMiddleware]);
//   },
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       socketMiddleware()
//       // websocketConnect(WS_FEED_ACTIONS),
//       // websocketConnectProfile(WS_PROFILE_ACTIONS)
//     ),
// });
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

// .onclose
// { type: WEBSOCKET_CLOSE }

// .onmessage
// {
//   type: WEBSOCKET_MESSAGE,
//   payload: {
//     data: parsedData,
//   },
// }

// .onerror
// { type: WEBSOCKET_ERROR, payload: event }

// .onopen
// { type: WEBSOCKET_OPEN }

// .onconnect
// type === WEBSOCKET_CONNECT

// export type RootState = ReturnType<typeof rootReducer>;

// export type AppDispatch = typeof store.dispatch;

// // hooks.ts
// export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
// export const useDispatch = () => dispatchHook<AppDispatch>();

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// //вызов расширения Redux DevTools. Проверка наличия объектов window и window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__. Если всё хорошо,
// //вызовется расширение с пустым набором опций. В противном случае — вернется compose.
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

//расширитель хранилища, функция высшего порядка, которая возвращает новый, расширенный генератор хранилища

// Инициализируем хранилище с помощью корневого редьюсера
// export const store = createStore(rootReducer, enhancer);

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;
// export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

// export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
// export const useDispatch = () => dispatchHook<AppDispatch>();

// store.ts
