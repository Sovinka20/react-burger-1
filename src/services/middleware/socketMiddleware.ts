import { Middleware, MiddlewareAPI } from "redux";
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
  const tokenLocalStorage: string = localStorage.getItem("accessToken") || "";
  const token: string =
    tokenLocalStorage !== ""
      ? tokenLocalStorage.substring(tokenLocalStorage.length - 171)
      : //.split("Bearer ")[1]
        tokenLocalStorage;
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;
    return (next) => (action: TWSAction) => {
      const { dispatch } = store;
      const { wsInit, disconnect, onError, onMessage } = actions;

      if (action.type === wsInit && socket === null) {
        socket = withToken
          ? (socket = new WebSocket(`${url}?token=${token}`))
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
      } else if (action.type === disconnect && socket != null) {
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};
