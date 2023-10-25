import { TWSData } from "../../../data/typesScripts";

export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_CONNECTION_MESSAGE = "WEBSOCKET_MESSAGE";

export interface IWSUserHistoryConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSUserHistoryConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWSUserHistoryConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetUserHistoryOrders {
  readonly type: typeof WS_CONNECTION_MESSAGE;
  payload: TWSData;
}

export type TWSUserHistoryActions =
  | IWSUserHistoryConnectionSuccess
  | IWSUserHistoryConnectionError
  | IWSUserHistoryConnectionClosed
  | IWSGetUserHistoryOrders;

export const WSActionsOrdersUserHistory = {
  wsInit: WS_CONNECTION_SUCCESS,
  disconnect: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_CONNECTION_MESSAGE,
};
