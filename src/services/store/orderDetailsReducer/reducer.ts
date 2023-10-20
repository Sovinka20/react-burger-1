import { RESET_ORDER_DATA, SET_ORDER_DATA } from "./actions";

const initialState = {
  order: 0,
  name: null,
};

export const OrderDetailsReducer = (
  state = initialState,
  action: { type: string; payload: { order: { number: number }; name: string } }
) => {
  switch (action.type) {
    case SET_ORDER_DATA:
      return {
        ...state,
        order: action.payload.order.number,
        name: action.payload.name,
      };
    case RESET_ORDER_DATA:
      return {
        order: 0,
        name: null,
      };
    default:
      return state;
  }
};
