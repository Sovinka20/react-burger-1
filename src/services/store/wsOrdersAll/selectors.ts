import { ISocketOrder } from "../../../data/typesScripts";

export const getWsAllIngridients = (state: {
  wsOrdersAllReducer: {
    data: ISocketOrder;
  };
}) => state.wsOrdersAllReducer.data;
export const getWsAllIngridientsTotal = (state: {
  wsOrdersAllReducer: { total: number };
}) => state.wsOrdersAllReducer.total;
export const getWsAllIngridientsTotalToday = (state: {
  wsOrdersAllReducer: { totalToday: number };
}) => state.wsOrdersAllReducer.totalToday;

export const getWsIngridients = (state: {
  wsOrdersReducer: {
    data: ISocketOrder;
  };
}) => state.wsOrdersReducer.data;
