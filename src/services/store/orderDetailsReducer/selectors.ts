import { TOrderResponse } from "../../../data/typesScripts";

export const getOrderNumbers = (state: {
  OrderDetailsReducer: { orderDetails: TOrderResponse };
}) => state.OrderDetailsReducer.orderDetails.order.number;
