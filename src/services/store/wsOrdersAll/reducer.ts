import { IIngridientsOrder } from "../../../data/typesScripts";

const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WEBSOCKET_MESSAGE = "WEBSOCKET_MESSAGE";

type TStateIngredientDetailsReducer = {
  //  ingredient: IIngridients[];
};

const initialState = {
  wsConnect: false,
  message: [],
  error: "",
};

const wsOrdersReducer = (
  state = initialState,
  action: { type: string; payload: { data: { orders: IIngridientsOrder[] } } }
) => {
  console.log(action);
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnect: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnect: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnect: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        message: [...state.message, action.payload],
      };
    case WEBSOCKET_MESSAGE: {
      // наверное самый важный это этот кейс, где мы кладем полученные заказы в стейт. Потом отображаем эти заказы на компоненте
      return {
        ...state,
        data: action.payload.data.orders,
      };
    }
    default:
      return state;
  }
};

export { wsOrdersReducer };
