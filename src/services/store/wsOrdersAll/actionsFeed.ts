import { TWSData } from "../../../data/typesScripts";

export const WEBSOCKET_OPEN = "WEBSOCKET_OPEN";
export const WEBSOCKET_ERROR = "WEBSOCKET_ERROR";
export const WEBSOCKET_CLOSE = "WEBSOCKET_CLOSE";
export const WEBSOCKET_MESSAGE = "WEBSOCKET_MESSAGE";

export interface IWSConnectionSuccess {
  readonly type: typeof WEBSOCKET_OPEN;
}

export interface IWSConnectionError {
  readonly type: typeof WEBSOCKET_ERROR;
}

export interface IWSConnectionClosed {
  readonly type: typeof WEBSOCKET_CLOSE;
}

export interface IWSGetOrders {
  readonly type: typeof WEBSOCKET_MESSAGE;
  payload: TWSData;
}

export type TWSOrdersActions =
  | IWSConnectionSuccess
  | IWSConnectionError
  | IWSConnectionClosed
  | IWSGetOrders;

export const WSActionsOrdersAll = {
  wsInit: WEBSOCKET_OPEN,
  disconnect: WEBSOCKET_CLOSE,
  onError: WEBSOCKET_ERROR,
  onMessage: WEBSOCKET_MESSAGE,
};
