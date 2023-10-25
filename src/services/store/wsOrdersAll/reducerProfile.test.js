import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_MESSAGE,
  WS_CONNECTION_SUCCESS,
} from "./actionsProfile";
import { initialState, wsOrdersReducer as reducer } from "./reducerProfile";

describe("Тест Редьюсера wsOrdersReducer", () => {
  it("should WS_CONNECTION_SUCCESS", () => {
    expect(reducer(initialState, { type: WS_CONNECTION_SUCCESS })).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("should WS_CONNECTION_CLOSED", () => {
    expect(reducer(initialState, { type: WS_CONNECTION_CLOSED })).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        success: false,
      },
    });
  });

  it("should WS_CONNECTION_ERROR", () => {
    expect(reducer(initialState, { type: WS_CONNECTION_ERROR })).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should WS_CONNECTION_MESSAGE", () => {
    const payload = {
      orders: [],
      success: true,
      total: 120,
      totalToday: 10,
    };
    expect(
      reducer(initialState, { type: WS_CONNECTION_MESSAGE, payload })
    ).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        orders: payload.orders,
        success: payload.success,
        total: payload.total,
        totalToday: payload.totalToday,
      },
    });
  });
});
