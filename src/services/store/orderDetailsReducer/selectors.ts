export const getOrderNumbers = (state: {
  OrderDetailsReducer: { order: number };
}) => state.OrderDetailsReducer.order;
