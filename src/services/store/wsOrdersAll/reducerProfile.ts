import { TWSData } from "../../../data/typesScripts";
import {
  TWSUserHistoryActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_MESSAGE,
  WS_CONNECTION_SUCCESS,
} from "./actionsProfile";

type ordersUserReducerState = {
  wsConnected: boolean;
  data: TWSData;
};

const initialState: ordersUserReducerState = {
  wsConnected: false,
  data: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

const wsOrdersReducer = (
  state = initialState,
  action: TWSUserHistoryActions
) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        data: {
          ...state.data,
          success: false,
        },
      };
    case WS_CONNECTION_MESSAGE:
      return {
        ...state,
        data: {
          ...state.data,
          orders: action.payload.orders,
          //.reverse(),
          success: action.payload.success,
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    default:
      return state;
  }
};

export { wsOrdersReducer };
