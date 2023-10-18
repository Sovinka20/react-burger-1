import { RESET_ORDER_DATA, SET_ORDER_DATA } from "./reducer";

export const setOrderData = (payload: { email: string; user: string }) => ({
  type: SET_ORDER_DATA,
  payload,
});

export const resetOrderData = () => ({
  type: RESET_ORDER_DATA,
});
