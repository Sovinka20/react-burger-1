import { TWSData } from "../../../data/typesScripts";
import {
  TWSOrdersActions,
  WEBSOCKET_CLOSE,
  WEBSOCKET_ERROR,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
} from "./actionsFeed";

export type TOrdersReducer = {
  wsConnected: boolean;
  data: TWSData;
};

export const initialState: TOrdersReducer = {
  wsConnected: false,
  data: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
};
export const wsOrdersAllReducer = (
  state = initialState,
  action: TWSOrdersActions
) => {
  switch (action.type) {
    case WEBSOCKET_OPEN:
      return {
        ...state,
        wsConnected: true,
      };
    case WEBSOCKET_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WEBSOCKET_CLOSE:
      return {
        ...state,
        wsConnected: false,
        data: {
          ...state.data,
          success: false,
        },
      };
    case WEBSOCKET_MESSAGE:
      return {
        ...state,
        data: {
          ...state.data,
          orders: action.payload.orders,
          success: action.payload.success,
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    default: {
      return state;
    }
  }
};
