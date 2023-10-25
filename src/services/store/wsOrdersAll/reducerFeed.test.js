import {
  WEBSOCKET_CLOSE,
  WEBSOCKET_ERROR,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
} from "./actionsFeed";
import { initialState, wsOrdersAllReducer as reducer } from "./reducerFeed";

describe("Тест Редьюсера wsOrdersAllReducer", () => {
  it("should WEBSOCKET_OPEN", () => {
    expect(reducer(initialState, { type: WEBSOCKET_OPEN })).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("should WEBSOCKET_CLOSE", () => {
    expect(reducer(initialState, { type: WEBSOCKET_CLOSE })).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        success: false,
      },
    });
  });

  it("should WEBSOCKET_ERROR", () => {
    expect(reducer(initialState, { type: WEBSOCKET_ERROR })).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should WEBSOCKET_MESSAGE", () => {
    const payload = {
      orders: [],
      success: true,
      total: 120,
      totalToday: 10,
    };
    expect(reducer(initialState, { type: WEBSOCKET_MESSAGE, payload })).toEqual(
      {
        ...initialState,
        data: {
          ...initialState.data,
          orders: payload.orders,
          success: payload.success,
          total: payload.total,
          totalToday: payload.totalToday,
        },
      }
    );
  });
});
