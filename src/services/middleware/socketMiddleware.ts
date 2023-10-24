import { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../data/cookie";
import { TStore } from "../../data/typesScripts";
import { store } from "../store";

type AppDispatch = typeof store.dispatch;

export type WSActions = {
  wsInit: string;
  disconnect: string;
  onError: string;
  onMessage: string;
};

type TWSAction = {
  type: string;
  payload?: string;
};

export const webSocketMiddleware = (
  url: string,
  actions: WSActions,
  withToken: boolean
): Middleware => {
  // const tokenLocalStorage: string | undefined =
  //   window.localStorage.getItem("accessToken") || "";
  // const token: string =
  //   tokenLocalStorage !== ""
  //     ? tokenLocalStorage.substring(tokenLocalStorage.length - 171)
  //     : tokenLocalStorage;
  // console.log(token, tokenLocalStorage, localStorage.getItem("accessToken"));
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSAction) => {
      const { dispatch } = store;
      const { wsInit, disconnect, onError, onMessage } = actions;

      if (action.type === wsInit && socket === null) {
        // if (token === "" && url === WS_URL_ORDERS_USER_HISTORY)
        //   window.location.reload();

        socket = withToken
          ? (socket = new WebSocket(
              `${url}?token=${getCookie("accessToken")?.split("Bearer ")[1]}`
            ))
          : new WebSocket(url);

        if (socket) {
          socket.onerror = (event) => {
            dispatch({ type: onError });
          };

          socket.onmessage = (event) => {
            dispatch({ type: onMessage, payload: JSON.parse(event.data) });
          };

          socket.onclose = (event) => {
            socket = null;
          };
        }
      } else if (action.type === disconnect && socket !== null) {
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};
