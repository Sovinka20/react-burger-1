export const getOrderNumbers = (state: {
  OrderDetailsReducer: { order: any };
}) => state.OrderDetailsReducer.order;
